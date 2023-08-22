import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { Item } from "./cart-slice";

interface CollectionItem {
  id: string;
  items: Item[];
  routeName: string;
  title: string;
}

interface ShopState {
  collections: { [key: string]: CollectionItem };
  isFetching: boolean;
  errorMessage: string | undefined;
}

const initialState: ShopState = {
  collections: {} as { [key: string]: CollectionItem },
  isFetching: false,
  errorMessage: undefined,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchCollectionsStart: (state) => {
      state.isFetching = true;
    },
    fetchCollectionsSuccess: (
      state,
      action: PayloadAction<{ collections: { [key: string]: CollectionItem } }>
    ) => {
      state.isFetching = false;
      state.collections = action.payload.collections;
    },
    fetchCollectionsFailure: (
      state,
      action: PayloadAction<{ message: string }>
    ) => {
      state.isFetching = false;
      state.errorMessage = action.payload.message;
    },
  },
});

export const {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} = shopSlice.actions;

export const selectShop = (state: { shop: ShopState }) => state.shop;

export const selectCollections = (state: { shop: ShopState }) =>
  state.shop.collections;

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    Object.keys(collections).map((key) => collections[key]) as CollectionItem[]
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectCollections], (collections) => {
    return collections[collectionUrlParam] as CollectionItem;
  });

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export default shopSlice.reducer;
