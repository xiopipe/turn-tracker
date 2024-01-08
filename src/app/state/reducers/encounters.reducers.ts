import { createReducer, on } from '@ngrx/store'
import { IEncountersState } from '../../core/models/encounter.state'
import {
	addEncounter,
	loadEncounter,
	loadedEncounter,
} from '../actions/encounters.actions'

export const initialState: IEncountersState = {
	loading: false,
	items: [
		{
			description: '',
			entity: [],
			name: '',
		},
	],
}

export const encounterReducer = createReducer(
	initialState,
	on(loadEncounter, (state) => ({ ...state, loading: true })),
	on(loadedEncounter, (state, { encounters }) => ({
		...state,
		items: encounters,
	})),
	on(addEncounter, (state, { encounter }) => {
		console.log(encounter)
		return { ...state, items: [...state.items, encounter] }
	}),
)
