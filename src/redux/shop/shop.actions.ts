import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { Dispatch } from "redux";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: any) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage: Error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot: any) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error: any) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
