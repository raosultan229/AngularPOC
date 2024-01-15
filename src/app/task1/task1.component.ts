import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  changeButton = false;
  changeText = "Text is not changed"
  inputText = "Random text";
  clear = false; 

  constructor(){
  setTimeout(() => {
    this.changeButton = true
  }, 4000);
}

 onChangeText() {
  this.clear = true;
  this.changeText = "Text is changed. New text is: " + this.inputText;
}
grabInputText(event: Event){
  this.inputText = (<HTMLInputElement>event.target).value;
}
}

