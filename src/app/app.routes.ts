import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './home/home-container/add-user/add-user.component';
import { ListUserComponent } from './home/home-container/list-user/list-user.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { UsersComponent } from './list/users/users.component';
import { PathNames } from './shared/constants/constants';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', redirectTo: PathNames.HOME, pathMatch: 'full' },
{ path: PathNames.HOME_MODULE, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: PathNames.LIST_MODULE, loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
{ path: PathNames.HOME, component: HomeContainerComponent },
{ path: PathNames.LIST, component: UsersComponent },
{ path: PathNames.ADD_USER, component: AddUserComponent },
{ path: PathNames.LIST_USER, component: ListUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    })
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

