import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilNoVerifyComponent } from './perfil-no-verify.component';

describe('PerfilNoVerifyComponent', () => {
  let component: PerfilNoVerifyComponent;
  let fixture: ComponentFixture<PerfilNoVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilNoVerifyComponent]
    });
    fixture = TestBed.createComponent(PerfilNoVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
