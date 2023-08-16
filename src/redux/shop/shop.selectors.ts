import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state: { shop: any }) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam: string) =>
  createSelector([selectCollections], (collections) => {
    return collections ? collections[collectionUrlParam] : null;
  })
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
