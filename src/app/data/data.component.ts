import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{
  @Output() serverAdded = new EventEmitter<{serName: string, serContent: string}>
  @Output() blueprintAdded = new EventEmitter<{serName: string, serContent: string}>
  newServerName = '';
  newServerContent = '';

  constructor(){}
  ngOnInit() {
    
  }
  onAddServer() {
    this.serverAdded.emit({serName: this.newServerName, serContent: this.newServerContent})
  }

  onAddBlueprint() {
    this.blueprintAdded.emit({serName: this.newServerName, serContent: this.newServerContent})

  }
}
