import { Injectable, inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY, catchError, from, map, mergeMap, of, tap } from 'rxjs'
import { CharacterService } from 'src/app/services/character.service'
import { EncounterService } from 'src/app/services/encounter.service'
import { Encounter } from '../actions-types.enums'
import { db } from '../db'
import { IEncounter } from 'src/app/core/models/encounter.model'
import { EncountersActions } from '../actions'

@Injectable()
export class EncounterEffects {
	private actions$ = inject(Actions)
	private encounterService = inject(EncounterService)

	loadEncounters$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EncountersActions.loadEncounter),
			mergeMap(() =>
				this.encounterService
					.getEncounterData()
					.pipe(
						map((encounter) =>
							EncountersActions.loadedEncounter({ encounters: encounter }),
						),
					),
			),
		),
	)

	addEncounter$ = createEffect(() =>
		this.actions$.pipe(
			ofType(Encounter.ADD),
			mergeMap(({ encounter }) =>
				from(db.encounter.add(encounter)).pipe(
					map(() => EncountersActions.addedEncounter({ encounter })),
				),
			),
		),
	)
}
