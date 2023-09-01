import { combineReducers } from "redux";
import userReducer from "../features/user-reducer";
import cartReducer from "../features/cart-slice";
import directoryReducer from "../features/directory-slice";
import themeReducer from "../features/theme-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from "../features/shop-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "theme"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  theme: themeReducer,
});

export default persistReducer(persistConfig, rootReducer);
