import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { IEncountersState } from 'src/app/core'

export const selectEncounterFeature = (state: AppState) => state.encounters

export const selectListEncounters = createSelector(
	selectEncounterFeature,
	(state: IEncountersState) => state.items,
)

export const selectLoadingEncounter = createSelector(
	selectEncounterFeature,
	(state: IEncountersState) => state.loading,
)

export const selectListEncounterFiltered = (queryFilter: string) =>
	createSelector(selectEncounterFeature, (state: IEncountersState) =>
		state.items.filter((item) => item.name.includes(queryFilter)),
	)

// export const selectListEncounterFiltered = (queryFilter: string) =>
// 	createSelector(
//     selectEncounterFeature,
//     (state) => state.items
// 	)
