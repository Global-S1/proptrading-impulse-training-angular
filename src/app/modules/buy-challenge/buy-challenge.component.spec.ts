import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyChallengeComponent } from './buy-challenge.component';

describe('BuyChallengeComponent', () => {
  let component: BuyChallengeComponent;
  let fixture: ComponentFixture<BuyChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyChallengeComponent]
    });
    fixture = TestBed.createComponent(BuyChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
