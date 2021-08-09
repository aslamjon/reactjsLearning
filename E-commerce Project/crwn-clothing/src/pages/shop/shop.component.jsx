import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOvverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }
    
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        // firestore dan collections nomli data ni olamiz 
        const collectionRef = firestore.collection('collections');
        // console.log(collectionRef,'collectionRef');
        // Malumotlarni olib keladi
        collectionRef.get().then(snapshot => {
            // console.log(snapshot,'snapshot');
            // firebase.utils da uni qayda ishlab kerakli malumotlarni olamiz
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            // backend dan malumotlar olib kelib, frontend malumotlarni yangilaymiz 
            updateCollections(collectionMap);
            // backend dan malumotlar kelib uni redux dan saqlagandan keyin Spinner ni o'chiramiz
            this.setState({ loading: false });
        })
        // fetch yordamida ham kerakli malumotlarni olib kelsa bo'ladi lekin uni biz xoxlagan shakilga o'tqazish uchun kerakli function yozish kerak u ozroq muamo lekin yuqoridagi codeda hamma narsa tayyor
        // fetch("https://firestore.googleapis.com/v1/projects/crwn-db-d9ec3/databases/(default)/documents/collections")
        // .then(response => response.json())
        // .then(collections => console.log(collections))
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                {/* <Route exact path={`${match.path}`} component={CollectionsOverview}/> */}
                {/* component ni o'rniga render ishlatishimizni sababi biz propni ishlata olamiz */}
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOvverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}/>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);