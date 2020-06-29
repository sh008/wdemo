import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MasterComponent } from './_layout/master/master.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieComponent } from './_charts/pie/pie.component';
import { BarComponent } from './_charts/bar/bar.component';
import { LineComponent } from './_charts/line/line.component';
import { NumberComponent } from './_charts/number/number.component';
@NgModule({
  declarations: [
    UsersComponent,
    MasterComponent,
    LoginComponent,
    DashboardComponent,
    PieComponent,
    BarComponent,
    LineComponent,
    NumberComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    NgxChartsModule
  ]
})
export class UsersModule { }
