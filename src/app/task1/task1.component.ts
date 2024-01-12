import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  changeButton = true;
  changeText = "Text is changed"

  constructor(){
  setTimeout(() => {
    this.changeButton = false
  }, 2000);
}

 onChangeText() {
  this.changeText = "Text is not changed"
}
}

