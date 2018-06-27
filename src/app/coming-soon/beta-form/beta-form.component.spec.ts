import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaFormComponent } from './beta-form.component';

describe('BetaFormComponent', () => {
  let component: BetaFormComponent;
  let fixture: ComponentFixture<BetaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
