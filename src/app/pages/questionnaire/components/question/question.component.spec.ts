import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ QuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call next', () => {
    const spy = spyOn(component.next, 'emit');

    component.onNext();

    expect(spy).toHaveBeenCalled();
  });

  it('should call prev', () => {
    const spy = spyOn(component.prev, 'emit');

    component.onPrev();

    expect(spy).toHaveBeenCalled();
  });
});
