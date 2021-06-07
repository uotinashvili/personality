import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Option, Question } from 'src/app/shared/models/question.interface';

@Component({
  selector: 'app-questionnaire-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question = {} as Question;
  @Input() totalCount = 0;
  @Input() isFirst = true;
  @Input() isLast = false;
  @Input() isAnswered = false;
  @Input() progress = 0;
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onNext(): void {
    this.next.emit();
  }

  onPrev(): void {
    this.prev.emit();
  }

}
