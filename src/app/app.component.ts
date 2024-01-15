import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements = [{type: 'server', name: 'Test Server', content: 'Dummy content'}]
  onServerCreated(serverData: {serName: string, serContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serName,
      content: serverData.serContent,
    });
  }

  onBlueprintCreated(blueprintData: {blueName: string, blueContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueName,
      content: blueprintData.blueContent
    });
  }
  onChangeFirst(){
    this.serverElements[0].name = 'Changes now'
  }
  onDestroy(){
    this.serverElements.splice(0,1)
  }
}
