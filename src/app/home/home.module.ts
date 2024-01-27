import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './home-container/home-container.component';
import { AddUserComponent } from './home-container/add-user/add-user.component';
import { SharedModule } from '../shared/shared.module';
import { SingletonModule } from '../Services/user-data.module';
import { SingletonService } from '../Services/user-data.service';


@NgModule({
  declarations: [
    HomeContainerComponent,
    AddUserComponent,
  ],
  imports: [
    SharedModule,
    SingletonModule,
  ],
  exports: [],
  providers: [SingletonService]
})
export class HomeModule { }
