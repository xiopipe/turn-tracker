import { Component, OnInit, ViewChild, inject } from '@angular/core'
import {
	IonInput,
	IonMenuToggle,
	IonModal,
	IonItem,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonButton,
	IonTitle,
	IonContent,
	IonSelect,
	IonSelectOption,
	IonLabel,
	IonItemDivider,
} from '@ionic/angular/standalone'
import { Store } from '@ngrx/store'
import { IEncounter } from '../../core/models/encounter.model'
import { addEncounter } from '../../state/actions/encounters.actions'
import { CommonModule } from '@angular/common'
import {
	FormArray,
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms'
import { selectListBestiary } from 'src/app/state/selectors/bestiary.selectors'

@Component({
	selector: 'app-add-encounter',
	templateUrl: './add-encounter.component.html',
	styleUrls: ['./add-encounter.component.scss'],
	standalone: true,
	imports: [
		IonModal,
		IonInput,
		IonMenuToggle,
		IonItem,
		IonHeader,
		IonToolbar,
		IonButtons,
		IonButton,
		IonTitle,
		IonContent,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonSelect,
		IonSelectOption,
		IonLabel,
		IonItemDivider,
	],
})
export class AddEncounterComponent {
	store = inject(Store)
	bestiary$ = this.store.select(selectListBestiary)

	@ViewChild(IonModal) modal!: IonModal

	name: string = ''
	encounterForm = new FormGroup({
		name: new FormControl('', {
			nonNullable: true,
			validators: [Validators.required, Validators.nullValidator],
		}),
		description: new FormControl('', { nonNullable: true }),
		entity: new FormArray<FormControl>([]),
	})

	addNewEntity() {
		const newEntity = new FormControl('')
		this.encounterForm.controls.entity.push(newEntity)
	}

	cancel() {
		this.modal.dismiss(null, 'cancel')
	}

	addEncounter() {
		this.store.dispatch(
			addEncounter({ encounter: this.encounterForm.getRawValue() }),
		)
	}
}
