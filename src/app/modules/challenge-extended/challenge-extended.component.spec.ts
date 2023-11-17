import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeExtendedComponent } from './challenge-extended.component';

describe('ChallengeExtendedComponent', () => {
  let component: ChallengeExtendedComponent;
  let fixture: ComponentFixture<ChallengeExtendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeExtendedComponent]
    });
    fixture = TestBed.createComponent(ChallengeExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
