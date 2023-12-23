import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";

@Injectable({
	providedIn: 'root'
})
export class CharacterService {

	private http = inject(HttpClient);
	private store = inject(Store);

	getBestiaryData() {
		return this.http.get<any>('assets/srd_5e_monsters.json')
	}

}
