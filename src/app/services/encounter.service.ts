import { Injectable } from '@angular/core'
import { db } from '../state/db'
import { concatMap, from, map, of } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class EncounterService {
	getEncounterData() {
		return from(db.encounter.toArray()).pipe(
			concatMap((indexedDbData) => {
				return of(indexedDbData)
			}),
		)
	}
}
