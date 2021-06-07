import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultRoutingModule } from './result-routing.module';

import { ResultComponent } from './containers/result/result.component';
import { ResultMessageComponent } from './components/result/result-message.component';

@NgModule({
  declarations: [ResultComponent, ResultMessageComponent],
  imports: [
    CommonModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
