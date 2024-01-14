import { CommonModule } from '@angular/common'
import { Component, ViewChild, inject } from '@angular/core'
import { Router, RouterLink, RouterLinkActive } from '@angular/router'
import { Store } from '@ngrx/store'
import {
	IonApp,
	IonSplitPane,
	IonMenu,
	IonContent,
	IonList,
	IonListHeader,
	IonNote,
	IonMenuToggle,
	IonItem,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonSelect,
	IonSelectOption,
	IonButton,
	SelectCustomEvent,
	MenuController,
	IonModal,
} from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import {
	mailOutline,
	mailSharp,
	paperPlaneOutline,
	paperPlaneSharp,
	heartOutline,
	heartSharp,
	archiveOutline,
	archiveSharp,
	trashOutline,
	trashSharp,
	warningOutline,
	warningSharp,
	bookmarkOutline,
	bookmarkSharp,
	arrowForwardOutline,
} from 'ionicons/icons'
import { loadBestiary } from './state/actions/bestiary.actions'
import { addEncounter, loadEncounter } from './state/actions/encounters.actions'
import { IEncounter } from './core/models/encounter.model'
import { AddEncounterComponent } from './components/add-encounter/add-encounter.component'
import { selectListEncounters } from './state/selectors/encounter.selectors'
import { SelectEncounterComponent } from './components/select-encounter/select-encounter.component'

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	standalone: true,
	imports: [
		RouterLink,
		RouterLinkActive,
		CommonModule,
		IonApp,
		IonSplitPane,
		IonMenu,
		IonContent,
		IonList,
		IonListHeader,
		IonNote,
		IonMenuToggle,
		IonItem,
		IonIcon,
		IonLabel,
		IonRouterOutlet,
		IonSelect,
		IonSelectOption,
		IonButton,
		AddEncounterComponent,
		IonModal,
		SelectEncounterComponent,
	],
})
export class AppComponent {
	store = inject(Store)
	router = inject(Router)
	menuController = inject(MenuController)

	@ViewChild('modal', { static: true }) modal!: IonModal

	public encounters$ = this.store.select(selectListEncounters)

	constructor() {
		this.store.dispatch(loadBestiary())
		this.store.dispatch(loadEncounter())
		addIcons({
			mailOutline,
			mailSharp,
			paperPlaneOutline,
			paperPlaneSharp,
			heartOutline,
			heartSharp,
			archiveOutline,
			archiveSharp,
			trashOutline,
			trashSharp,
			warningOutline,
			warningSharp,
			bookmarkOutline,
			bookmarkSharp,
			arrowForwardOutline,
		})
	}

	navigateToParties(event: SelectCustomEvent) {
		this.router.navigate(['/partys', event.detail.value])
		this.closeMenu()
	}

	closeMenu() {
		this.menuController.close()
	}
}
