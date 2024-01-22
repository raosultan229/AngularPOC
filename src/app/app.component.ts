import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-observables';
  data: any[] = [];

   myObserable = new Observable((observer)=>{
    observer.next([1,2,3,4,5,6,7,8,9])
   });

  getData(){

    this.myObserable.subscribe((value: any)=>{
    this.data = value;
    })
  }
}
