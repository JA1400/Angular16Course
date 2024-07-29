import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBComponent } from './portfolio-b.component';

describe('PortfolioBComponent', () => {
  let component: PortfolioBComponent;
  let fixture: ComponentFixture<PortfolioBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioBComponent]
    });
    fixture = TestBed.createComponent(PortfolioBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
