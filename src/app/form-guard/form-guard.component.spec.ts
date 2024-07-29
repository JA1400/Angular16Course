import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGuardComponent } from './form-guard.component';

describe('FormGuardComponent', () => {
  let component: FormGuardComponent;
  let fixture: ComponentFixture<FormGuardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGuardComponent]
    });
    fixture = TestBed.createComponent(FormGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
