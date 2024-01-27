import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingletonService } from './user-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SingletonService]
})
export class SingletonModule { }