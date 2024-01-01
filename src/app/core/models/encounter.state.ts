import { IEncounter } from './encounter.model'

export interface IEncountersState {
	loading: boolean
	items: IEncounter[]
}
