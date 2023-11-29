import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChoiceChallengeComponent } from './data-choice-challenge.component';

describe('DataChoiceChallengeComponent', () => {
  let component: DataChoiceChallengeComponent;
  let fixture: ComponentFixture<DataChoiceChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataChoiceChallengeComponent]
    });
    fixture = TestBed.createComponent(DataChoiceChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
