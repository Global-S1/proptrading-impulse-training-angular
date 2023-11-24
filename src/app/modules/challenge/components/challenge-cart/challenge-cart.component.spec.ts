import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCartComponent } from './challenge-cart.component';

describe('ChallengeCartComponent', () => {
  let component: ChallengeCartComponent;
  let fixture: ComponentFixture<ChallengeCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeCartComponent]
    });
    fixture = TestBed.createComponent(ChallengeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
