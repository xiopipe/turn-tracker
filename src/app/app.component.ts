import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
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
	],
})
export class AppComponent {
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
