import { Injectable, inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY, catchError, first, map, mergeMap, tap } from 'rxjs'
import { CharacterService } from 'src/app/services/character.service'
import { db } from '../db'

@Injectable()
export class BestiaryEffects {
	private actions$ = inject(Actions)
	private characterService = inject(CharacterService)

	loadBestiary$ = createEffect(() =>
		this.actions$.pipe(
			ofType('[Bestiary List] Load Bestiary'),
			mergeMap(() =>
				this.characterService.getBestiaryData().pipe(
					first(),
					map((bestiary) => ({
						type: '[Bestiary List] Loaded success',
						bestiary: bestiary,
					})),
					catchError(() => EMPTY),
				),
			),
		),
	)
}
