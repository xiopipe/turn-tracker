import { Routes } from '@angular/router'

export const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
	{
		path: 'partys/:idParty',
		loadComponent: () =>
			import('./components/folder/folder.page').then((m) => m.FolderPage),
	},
]
