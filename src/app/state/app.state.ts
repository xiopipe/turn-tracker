import { ActionReducerMap } from '@ngrx/store'
import { IBestiaryState, ICharacter } from '../core'
import { ICharacterState } from '../core/models/character.state'
import { bestiaryReducer } from './reducers/bestiary.reducers'
import { encounterReducer } from './reducers/encounters.action'
import { IEncountersState } from '../core/models/encounter.state'

export interface AppState {
	bestiary: IBestiaryState
	encounters: IEncountersState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
	bestiary: bestiaryReducer,
	encounters: encounterReducer,
}
