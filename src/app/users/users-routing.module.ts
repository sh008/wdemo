import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/auth.guard';

const routes: Routes = [{
  path: '', component: UsersComponent,canActivate:[AuthGuard], children: [
    { path: '', component: DashboardComponent }
  ]
},
{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
