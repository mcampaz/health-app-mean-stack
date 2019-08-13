import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteInfoSurveyComponent } from './athlete-info-survey.component';

describe('AthleteInfoSurveyComponent', () => {
  let component: AthleteInfoSurveyComponent;
  let fixture: ComponentFixture<AthleteInfoSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteInfoSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteInfoSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
