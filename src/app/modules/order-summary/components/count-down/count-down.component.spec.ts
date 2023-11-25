import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownComponent } from './count-down.component';

describe('CountDownComponentComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountdownComponent]
    });
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
