import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';

import { QuestionnaireComponent } from './containers/questionnaire/questionnaire.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [QuestionnaireComponent, QuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuestionnaireRoutingModule
  ]
})
export class QuestionnaireModule { }
