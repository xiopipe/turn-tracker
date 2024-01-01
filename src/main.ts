/// <reference types="@angular/localize" />

import { enableProdMode, importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { RouteReuseStrategy, provideRouter } from '@angular/router'
import {
	IonicRouteStrategy,
	provideIonicAngular,
} from '@ionic/angular/standalone'
import { routes } from './app/app.routes'
import { AppComponent } from './app/app.component'
import { environment } from './environments/environment'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { ROOT_REDUCERS } from './app/state/app.state'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { BestiaryEffects } from './app/state/effects/bestiary.effects'
import { EncounterEffects } from './app/state/effects/encounters.effects'

if (environment.production) {
	enableProdMode()
}

bootstrapApplication(AppComponent, {
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		provideIonicAngular(),
		provideRouter(routes),
		provideHttpClient(withInterceptorsFromDi()),
		importProvidersFrom(
			StoreModule.forRoot(ROOT_REDUCERS),
			StoreDevtoolsModule.instrument({
				name: 'Turn Tracker',
				maxAge: 25,
				logOnly: environment.production,
			}),
			EffectsModule.forRoot([BestiaryEffects, EncounterEffects]),
		),
	],
})
