import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteInfoFormComponent } from './athlete-info-form.component';

describe('AthleteInfoFormComponent', () => {
  let component: AthleteInfoFormComponent;
  let fixture: ComponentFixture<AthleteInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
