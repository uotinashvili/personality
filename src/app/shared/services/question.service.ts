import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question.interface';

const baseUrl = `${environment.apiUrl}/questions.json`;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {}

  loadQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(baseUrl)
      .pipe(
        map(result => result),
        catchError(err => throwError(err))
      );
  }

  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question[]>(baseUrl)
      .pipe(
        map(result => result.find(i => i.id === id) || {} as Question),
        catchError(err => throwError(err))
      );
  }

  getQuestionsTotalCount(): Observable<number> {
    return this.http.get<Question[]>(baseUrl)
      .pipe(
        map(result => result.length),
        catchError(err => throwError(err))
      );
  }
}
