import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
// Object.keys get keys in array
export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
) 

// **************** oldingisi **********************
// const COLLECTION_ID_MAP = {
//     hats: 1, 
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5,
// }

// collection.component dan kelgan parametrni COLLECTION_ID_MAP ni ichidan qidirib keraklisini qayta yuboradi
// bu usul dastur ishlashiga tasir qiladi chunki malumot ko'p bo'lsa uni qidirishga vaqt va kuch ketadi
// export const selectCollection = collectionUrlParam => createSelector(
//     [selectCollections],
//     collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
// )
// **************** hozirgisi **********************
// collection.component dan kelgan parametrni collections ni key ga qo'yamiz va u bizga o'sha key ga teshishli malumotni olib beladi
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)