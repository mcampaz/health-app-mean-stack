import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteHealthform1Component } from './athlete-healthform1.component';

describe('AthleteHealthform1Component', () => {
  let component: AthleteHealthform1Component;
  let fixture: ComponentFixture<AthleteHealthform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteHealthform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteHealthform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
