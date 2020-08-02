import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardsDetailComponent } from './creditcards-detail.component';

describe('CreditcardsDetailComponent', () => {
  let component: CreditcardsDetailComponent;
  let fixture: ComponentFixture<CreditcardsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
