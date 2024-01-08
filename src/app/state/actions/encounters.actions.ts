import { createAction, props } from '@ngrx/store'
import { IEncountersState } from '../../core/models/encounter.state'
import { IEncounter } from 'src/app/core/models/encounter.model'
import { Encounter } from '../actions-types.enums'

export const loadEncounter = createAction(Encounter.LOAD)

export const loadedEncounter = createAction(
	Encounter.LOADED,
	props<{ encounters: IEncounter[] }>(),
)

export const addEncounter = createAction(
	Encounter.ADD,
	props<{ encounter: IEncounter }>(),
)

export const addedEncounter = createAction(
	Encounter.ADDED,
	props<{ encounter: IEncounter }>(),
)

export const updateEncounter = createAction(
	Encounter.UPDATE,
	props<{ encounter: IEncounter }>(),
)
