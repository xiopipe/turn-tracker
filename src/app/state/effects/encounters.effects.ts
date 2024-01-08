import { Injectable, inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY, catchError, map, mergeMap } from 'rxjs'
import { CharacterService } from 'src/app/services/character.service'
import { EncounterService } from 'src/app/services/encounter.service'
import { Encounter } from '../actions-types.enums'

@Injectable()
export class EncounterEffects {
	private actions$ = inject(Actions)
	private encounterService = inject(EncounterService)

	loadEncounters$ = createEffect(() =>
		this.actions$.pipe(
			ofType(Encounter.LOAD),
			mergeMap(() =>
				this.encounterService.getEncounterData().pipe(
					map((encounter) => ({
						type: Encounter.LOADED,
						encounters: encounter,
					})),
				),
			),
		),
	)
}
