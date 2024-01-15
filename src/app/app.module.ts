import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveAttributeComponent } from './directive-attribute/directive-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    DataBindingComponent,
    DirectiveAttributeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
