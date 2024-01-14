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
import { Store, select } from '@ngrx/store'
import {
	debounceTime,
	distinctUntilChanged,
	filter,
	map,
	switchMap,
} from 'rxjs'
import {
	selectListEncounterFiltered,
	selectListEncounters,
} from 'src/app/state/selectors/encounter.selectors'

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
	public encountersFiltered$ = this.store.select(
		selectListEncounterFiltered(''),
	)
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
		this.encountersFiltered$
		if (searchQuery === undefined || searchQuery === null) return
		this.encountersFiltered$ = this.store
			.select(selectListEncounterFiltered(searchQuery))
			.pipe(
				distinctUntilChanged(), // Opcional: Evita búsquedas innecesarias si el valor no ha cambiado.
				switchMap(() =>
					this.store.select(selectListEncounterFiltered(searchQuery)),
				),
			)
	}
}
