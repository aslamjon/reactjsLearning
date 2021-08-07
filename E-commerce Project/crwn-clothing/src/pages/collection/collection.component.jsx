import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection.style';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
            {items.map(item => <CollectionItem key={item.id} item={item} />)}
        </CollectionItemsContainer>
    </CollectionPageContainer>
)}

// shop/ dan keyin keladigan parametrga teng elementni olib beradi
// ownProps to'liq props ni qaytaradi. uni ichidan match.params.collectionId ni olib selectorga yuboramiz
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);