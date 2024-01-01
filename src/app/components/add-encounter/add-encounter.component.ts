import { Component, OnInit, inject } from '@angular/core'
import {
	IonInput,
	IonMenuToggle,
	IonModal,
	IonItem,
} from '@ionic/angular/standalone'
import { Store } from '@ngrx/store'
import { IEncounter } from '../../core/models/encounter.model'
import { addEncounter } from '../../state/actions/encounters.actions'

@Component({
	selector: 'app-add-encounter',
	templateUrl: './add-encounter.component.html',
	styleUrls: ['./add-encounter.component.scss'],
	standalone: true,
	imports: [IonModal, IonInput, IonMenuToggle, IonItem],
})
export class AddEncounterComponent implements OnInit {
	store = inject(Store)

	constructor() {}

	ngOnInit() {}

	addEncounter(encounter: IEncounter) {
		this.store.dispatch(addEncounter(encounter))
	}
}
