import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

@NgModule({
  declarations: [DashboardComponent, IntroductionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
