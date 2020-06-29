import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'test', component: TestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
