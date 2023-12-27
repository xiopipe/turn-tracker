import { createReducer, on } from '@ngrx/store'
import { IBestiaryState, ICharacter } from 'src/app/core'
import { loadBestiary, loadedBestiary } from '../actions/bestiary.actions'
import { ICharacterState } from 'src/app/core/models/character.state'

export const initialState: IBestiaryState = { loading: false, items: [] }

export const bestiaryReducer = createReducer(
	initialState,
	on(loadBestiary, (state) => {
		return { ...state, loading: true }
	}),
	on(loadedBestiary, (state, { bestiary }) => {
		return { ...state, items: bestiary, loading: false }
	}),
	// se puede colocar varias acciones en los reducers
	// on(loadedBestiary, (state) => state)
)
