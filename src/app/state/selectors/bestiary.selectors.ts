import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { IBestiaryState } from "src/app/core";


export const selectBestiaryFeature = (state: AppState) => state.bestiary;

export const selectListBestiary = createSelector(
  selectBestiaryFeature,
  (state: IBestiaryState) => state.items
);

export const selectLoadingBestiary = createSelector(
  selectBestiaryFeature,
  (state: IBestiaryState) => state.loading
);
