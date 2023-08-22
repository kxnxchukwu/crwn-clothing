import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "../../features/shop-slice";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess({ collections: collectionsMap }));
  } catch (error) {
    yield put(fetchCollectionsFailure({ message: error.message }));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest("shop/fetchCollectionsStart", fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
