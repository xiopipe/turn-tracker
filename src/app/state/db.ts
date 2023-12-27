import Dexie, { Table } from 'dexie'
import { IBestiary, ICharacter } from '../core'

export class storageDexie extends Dexie {
	bestiary!: Table<IBestiary>
	character!: Table<ICharacter>

	constructor() {
		super('turnTrackerDataBase', { allowEmptyDB: true })
		this.version(1).stores({
			bestiary: '++name, name, challenge',
			character: '++id, name, initiative',
		})
	}
}

export const db = new storageDexie()
