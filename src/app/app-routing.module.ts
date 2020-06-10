import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyNewPageComponent } from './my-new-page/my-new-page.component';
import { ControlUsersComponent } from './control-users/control-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  { path: 'home', component: MyNewPageComponent },
  { path: 'control-users', component: ControlUsersComponent },
  { path: 'view-users', component: ViewUsersComponent },
  { path: '**', redirectTo: '/home' },
  // { path: '/*path', redirectTo: '/home' }
  // { path: 'second-component', component: MyNewPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
