import { IBestiary } from './bestiary.model'

export interface IBestiaryState {
	loading: boolean
	items: ReadonlyArray<IBestiary>
}
