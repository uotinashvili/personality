import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Question } from 'src/app/shared/models/question.interface';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  id = 1;
  answeredQuestions: Question[] = [];
  question: Question = {} as Question;
  totalCount = 0;
  counter = 60;
  timeExpired = false;

  constructor(
    private questionService: QuestionService,
    private route: Router) {
      timer(0, 1000).pipe(
        take(this.counter),
        tap(() => this.countDown(--this.counter))
      ).subscribe();
    }

  countDown(remaining: number): void {
    if (remaining === 0) {
      this.route.navigateByUrl('/result', { state: { timeExpired: true } });
    }
  }

  ngOnInit(): void {
    this.getQuestionsTotalCount();
    this.getQuestionById(this.id);
  }

  getQuestionById(id: number, callBack = () => { }): void {
    this.questionService.getQuestionById(id)
      .subscribe(result => {
        this.question = result;
        callBack();
      });
  }

  getQuestionsTotalCount(): void {
    this.questionService.getQuestionsTotalCount()
      .subscribe(result => {
        this.totalCount = result;
      });
  }

  next(): void {
    if (!this.isLast()) {
      this.setAnswer();
      this.id++;
      this.getQuestionById(this.id, () => {
        this.setAnswer(false);
      });
    } else {
      this.setAnswer();
      this.route.navigateByUrl('/result', { state: this.answeredQuestions });
    }
  }

  prev(): void {
    if (!this.isFirst()) {
      this.id--;
      this.getQuestionById(this.id, () => {
        this.setAnswer();
      });
    }
  }

  isFirst(): boolean {
    return this.id <= 1;
  }

  isLast(): boolean {
    return this.id >= this.totalCount;
  }

  isAnswered(): boolean {
    return this.answeredQuestions.find(i => i.id === this.question.id && i.isAnswered) ? true : false;
  }

  setAnswer(isNewQuestion = true): void {
    const question = {
      ...this.question,
      isAnswered: true
    };
    const exists = this.answeredQuestions.find(i => i.id === this.id);
    if (!exists && isNewQuestion) {
      this.answeredQuestions.push(question);
    } else {
      if (exists) {
        this.question.selected = exists.selected;
      }
    }
  }
}
