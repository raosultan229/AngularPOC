import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-attribute',
  templateUrl: './directive-attribute.component.html',
  styleUrls: ['./directive-attribute.component.css']
})
export class DirectiveAttributeComponent {
  showContent = false;
  log = []

  ontoggleDetails(){
    this.showContent = !this.showContent;
    this.log.push(this.log.length + 1);
  }
}
