import { HousingLocation } from './../housinglocation';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" alt="">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation.name}}</h2>
        <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
      <h2 class="section-heading">Apply Now</h2>
      <form [formGroup]="applyForm" (submit)="submitForm()">
      <label for="first-name">First Name</label>
      <input id="first-name" type="text" formControlName = "firstName">
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" formControlName="lastName">
      <label for="email">Email</label>
      <input type="text" formControlName="email" id="email">
      <button class="primary" type="submit">Submit</button>
    </form>
    </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })
 constructor(){
  const houseLocationId = parseInt(this.route.snapshot.params['id'])
  this.housingLocation = this.housingService.getHousingLocationById(houseLocationId)
 } 
 submitForm(){
  this.housingService.submitForm(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? '',
  )
 }
}
