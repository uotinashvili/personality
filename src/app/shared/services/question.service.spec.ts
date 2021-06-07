import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { QuestionService } from './question.service';
import { Question } from '../models/question.interface';
import { catchError, map } from 'rxjs/operators';

describe('QuestionService', () => {
  let service: QuestionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [QuestionService]
    });
    service = TestBed.inject(QuestionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http request', () => {
    const questions = [{} as Question];

    service.loadQuestions().subscribe(result => {
      expect(result).not.toBe([]);
      expect(result).toEqual(questions);
    });

    const req = httpMock.expectOne(`./assets/data//questions.json`);
    expect(req.request.method).toEqual('GET');

    req.flush([{}]);
  });

  it('should call http request by id', () => {
    const question = {} as Question;

    service.getQuestionById(1).subscribe(result => {
      expect(result).toEqual(question);
    });

    const req = httpMock.expectOne(`./assets/data//questions.json`);
    expect(req.request.method).toEqual('GET');

    req.flush([question]);
  });
});
