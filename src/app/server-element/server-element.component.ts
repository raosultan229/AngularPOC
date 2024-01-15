import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
@Input("srvElement") element: {type: string, name: string, content: string};
@Input () name: string;
@ContentChild ('paragraphContent') paragraph: ElementRef;
constructor(){
  console.log('constructor called')
}

ngOnChanges(changes: SimpleChanges){
 console.log('ngOnchanges called') 
 console.log(changes);
}

ngOnInit() {
  console.log('ngOnit called')
  // console.log('paragraph content is' + this.paragraph.nativeElement.textContent)
}
ngDoCheck() {
  console.log('ngDoCheck called')
}
ngAfterContentInit(){
  console.log('ngAfterContentInit called')
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked');
}
ngOnDestroy(){
  console.log('component destroyed')
}
}
