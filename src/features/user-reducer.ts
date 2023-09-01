import { createAction, createReducer } from "@reduxjs/toolkit";

interface EmailAndPassword {
  email: string;
  password: string;
  displayName?: string;
}

interface SignUpSuccess {
  email: string;
  password: string;
  displayName: string;
}

interface CurrentUser {
  createdAt: Record<
    string,
    {
      seconds: number;
      nanoseconds: number;
    }
  >;
  displayName: string;
  email: string;
  id: string;
}

interface UserState {
  currentUser: CurrentUser | null;
  error: string | undefined | null;
}

const initialState: UserState = {
  currentUser: null,
  error: null,
};

export const googleSignInStart = createAction("user/googleSignInStart");
export const signInSuccess = createAction<CurrentUser>("user/signInSuccess");
export const signInFailure =
  createAction<Omit<UserState, "currentUser">>("user/signInFailure");
export const emailSignInStart = createAction<EmailAndPassword>(
  "user/emailSignInStart"
);
export const checkUserSession = createAction("user/checkUserSession");
export const signOutStart = createAction("user/signOutStart");
export const signOutSuccess = createAction("user/signOutSuccess");
export const signOutFailure = createAction<Omit<UserState, "currentUser">>(
  "user/signOutFailure"
);
export const signUpFailure =
  createAction<Omit<UserState, "currentUser">>("user/signUpFailure");
export const signUpStart = createAction<EmailAndPassword>("user/signUpStart");
export const signUpSuccess = createAction<SignUpSuccess>("user/signUpSuccess");

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signInSuccess, (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
    })
    .addCase(signOutSuccess, (state) => {
      state.currentUser = null;
      state.error = null;
    })
    .addCase(signInFailure, (state, action) => {
      state.error = action.payload.error;
    })
    .addCase(signOutFailure, (state, action) => {
      state.error = action.payload.error;
    })
    .addCase(signUpFailure, (state, action) => {
      state.error = action.payload.error;
    });
});

export const selectCurrentUser = (state: { user: UserState }) =>
  state.user.currentUser;

export default userReducer;
