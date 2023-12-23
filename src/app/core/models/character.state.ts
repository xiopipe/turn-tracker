import { ICharacter } from "./character.model";

export interface ICharacterState {
  loading: boolean,
	items: ReadonlyArray<ICharacter>;
}
