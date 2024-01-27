import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SingletonModule } from '../Services/user-data.module';
import { SingletonService } from '../Services/user-data.service';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    SingletonModule,
  ],
  providers: [SingletonService]
})
export class ListModule { }
