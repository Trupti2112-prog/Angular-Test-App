import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
      AppRoutingModule,
      RouterModule,
      RouterOutlet,
      HomeModule,
      ListModule,
      SharedModule,
      CommonModule
    ]
})
export class AppModule {}