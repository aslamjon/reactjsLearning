import ShopActionTypes from "./shop.types";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});
export const fetchCollectionsStartAsync = () => {
    // wrking for dispatch in return. add redux-thunk lirabry in store.js 
    return dispatch => {
        // firestore dan collections nomli data ni olamiz 
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())
        // console.log(collectionRef,'collectionRef');
        // Malumotlarni olib keladi
        collectionRef.get().then(snapshot => {
            // firebase.utils da uni qayda ishlab kerakli malumotlarni olamiz
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
        // fetch yordamida ham kerakli malumotlarni olib kelsa bo'ladi lekin uni biz xoxlagan shakilga o'tqazish uchun kerakli function yozish kerak u ozroq muamo lekin yuqoridagi codeda hamma narsa tayyor
        // fetch("https://firestore.googleapis.com/v1/projects/crwn-db-d9ec3/databases/(default)/documents/collections")
        // .then(response => response.json())
        // .then(collections => console.log(collections))
    }
}