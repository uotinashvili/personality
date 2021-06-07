import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/models/question.interface';

@Component({
  selector: 'app-resul',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  questions: Question[] = [];
  result = '';
  timeExpired = false;

  constructor(
    private route: Router) {
      const state = this.route.getCurrentNavigation()?.extras.state;
      if (state) {
        if (Array.isArray(state)) {
          this.questions = state as Question[];
        } else {
          this.timeExpired = state.timeExpired;
        }
      }
    }

  ngOnInit(): void {
    this.setResults();
  }

  setResults(): void {
    if (this.questions.length > 0) {
      const correctAnswers = this.questions.filter(i => i.correctOptionId === i.selected);
      this.result = correctAnswers.length % 2 === 1 ? 'Introvert' : 'Extrovert';
    }
  }
}
