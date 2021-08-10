import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import collectionsOverview from './collections-overview.component';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});
// shunday yozsa ham bo'ladi faqat ichmaich bo'lganligi uchun codeni o'qish qiyinlashadi
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionsOverview))
// compose yordamida osonroq bo'ladi
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;