import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { db } from '../state/db'
import { catchError, concatMap, from, of, tap } from 'rxjs'
import { IBestiary } from '../core'

@Injectable({
	providedIn: 'root',
})
export class CharacterService {
	private http = inject(HttpClient)

	getBestiaryData() {
		const apiData$ = this.http
			.get<IBestiary[]>('assets/srd_5e_monsters.json')
			.pipe(
				tap({
					next: async (response) => {
						return await db.bestiary.bulkAdd(response)
					},
				}),
			)

		return from(db.bestiary.toArray())
			.pipe(catchError((error) => of([])))
			.pipe(
				concatMap((indexedDBData) => {
					if (indexedDBData && indexedDBData.length > 0) {
						return of(indexedDBData)
					} else {
						return apiData$
					}
				}),
			)
	}
}
