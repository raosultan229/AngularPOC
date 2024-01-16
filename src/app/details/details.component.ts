import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Your product with {{houseLocationId}} is here.
    </p>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
 houseLocationId = 0;
 constructor(){
  this.houseLocationId = Number(this.route.snapshot.params['id'])
 } 
}
