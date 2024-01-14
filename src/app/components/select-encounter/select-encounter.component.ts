import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonList,
	IonMenuToggle,
	IonModal,
	IonSearchbar,
	IonSelect,
	IonSelectOption,
	IonTitle,
	IonToolbar,
	SearchbarCustomEvent,
} from '@ionic/angular/standalone'
import { Store } from '@ngrx/store'
import { filter, map } from 'rxjs'
import { selectListEncounters } from 'src/app/state/selectors/encounter.selectors'

@Component({
	selector: 'app-select-encounter',
	templateUrl: './select-encounter.component.html',
	styleUrls: ['./select-encounter.component.scss'],
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
		IonIcon,
		IonSearchbar,
		IonList,
	],
})
export class SelectEncounterComponent implements OnInit {
	store = inject(Store)

	public encounters$ = this.store.select(selectListEncounters)

	constructor() {}

	ngOnInit() {}

	cancelChanges() {
		console.log('cancel')
	}

	confirmChanges() {
		console.log('confirm')
	}

	searchbarInput(e: SearchbarCustomEvent) {
		this.filterList(e.detail.value)
	}

	filterList(searchQuery: string | undefined | null) {
		if (searchQuery === undefined || searchQuery === null) return
		this.encounters$ = this.store
			.select(selectListEncounters)
			.pipe(
				map((encounters) =>
					encounters.filter((encounter) =>
						encounter.name.includes(searchQuery),
					),
				),
			)
	}
}
