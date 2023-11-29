import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceChallengeComponent } from './choice-challenge.component';

describe('ChoiceChallengeComponent', () => {
  let component: ChoiceChallengeComponent;
  let fixture: ComponentFixture<ChoiceChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceChallengeComponent]
    });
    fixture = TestBed.createComponent(ChoiceChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
