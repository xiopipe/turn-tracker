import { IBestiary } from './bestiary.model'
import { ICharacter } from './character.model'

export interface IEncounter {
	name: string
	description?: string
	entity?: ReadonlyArray<ICharacter | IBestiary>
}
