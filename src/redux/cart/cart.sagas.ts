import { all, call, put, takeLatest } from "redux-saga/effects";
import { clearCart } from "../../features/cart-slice";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSucess() {
  yield takeLatest("user/signOutSuccess", clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSucess)]);
}
