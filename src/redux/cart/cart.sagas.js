import { all, call, put, takeLatest } from "redux-saga/effects";
import { clearCart } from "./cart.actions";
import UserActionTypes from "../user/user.types";

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSucess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
    yield all([call(onSignOutSucess)])
}