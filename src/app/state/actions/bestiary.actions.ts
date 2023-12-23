import { createAction, props } from "@ngrx/store";
import { IBestiary, ICharacter } from '../../core';
// export const addCharacter = createAction(
//   '[Character List] Add Character'
// );

export const loadBestiary = createAction(
  '[Bestiary List] Load Bestiary'
);

export const loadedBestiary = createAction(
  '[Bestiary List] Loaded success',
  props < { bestiary: IBestiary[]} > ()
);
