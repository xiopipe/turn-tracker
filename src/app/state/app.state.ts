import { ActionReducerMap } from '@ngrx/store'
import { IBestiaryState, ICharacter } from '../core'
import { ICharacterState } from '../core/models/character.state'
import { bestiaryReducer } from './reducers/bestiary.reducers'

export interface AppState {
	bestiary: IBestiaryState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
	bestiary: bestiaryReducer,
}
