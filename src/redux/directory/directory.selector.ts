import { createSelector } from "reselect";

const selectDirectory = (state: { directory: any }) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
