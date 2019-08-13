import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachAthleteInfoSurveyComponent } from './coach-athlete-info-survey.component';

describe('CoachAthleteInfoSurveyComponent', () => {
  let component: CoachAthleteInfoSurveyComponent;
  let fixture: ComponentFixture<CoachAthleteInfoSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachAthleteInfoSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachAthleteInfoSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
