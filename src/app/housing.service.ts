import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url="http://localhost:3000/locations"
  // readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
constructor(){}
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
  const data = await fetch(`${this.url}/${id}`);
  return await data.json() ?? {};
  }
  submitForm(firstName:string, lastName: string, email: string){
    alert(firstName);
    alert(lastName);
    alert(email);
    console.log(firstName, lastName, email)
  }
}
