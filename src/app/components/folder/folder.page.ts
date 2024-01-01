import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonContent,
} from '@ionic/angular/standalone'
import { Store } from '@ngrx/store'
import { CharacterService } from 'src/app/services/character.service'
import { loadBestiary } from 'src/app/state/actions/bestiary.actions'
import { selectLoadingBestiary } from 'src/app/state/selectors/bestiary.selectors'

@Component({
	selector: 'app-folder',
	templateUrl: './folder.page.html',
	styleUrls: ['./folder.page.scss'],
	standalone: true,
	imports: [
		IonHeader,
		IonToolbar,
		IonButtons,
		IonMenuButton,
		IonTitle,
		IonContent,
		CommonModule,
	],
})
export class FolderPage implements OnInit {
	private activatedRoute = inject(ActivatedRoute)
	private store = inject(Store)
	private characterService = inject(CharacterService)

	public folder!: string
	loading$ = this.store.select(selectLoadingBestiary)

	constructor() {}

	ngOnInit() {
		this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string
		this.store.dispatch(loadBestiary())
	}
}
