import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
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
} from 'ionicons/icons'
import { loadBestiary } from './state/actions/bestiary.actions'
import { addEncounter, loadEncounter } from './state/actions/encounters.actions'
import { IEncounter } from './core/models/encounter.model'
import { AddEncounterComponent } from './components/add-encounter/add-encounter.component'

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
	],
})
export class AppComponent {
	store = inject(Store)

	public appPages = [
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
		{ title: 'partys', url: '/encounters/:idParty', icon: 'mail' },
	]
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
		})
	}
}
