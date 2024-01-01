import Dexie, { Table } from 'dexie'
import { IBestiary, ICharacter } from '../core'
import { IEncounter } from '../core/models/encounter.model'

export class storageDexie extends Dexie {
	bestiary!: Table<IBestiary>
	character!: Table<ICharacter>
	encounter!: Table<IEncounter>

	constructor() {
		super('turnTrackerDataBase', { allowEmptyDB: true })
		this.version(1).stores({
			bestiary: '++name, name, challenge',
			character: '++id, name, initiative',
			encounter: '++name',
		})
	}
}

export const db = new storageDexie()
