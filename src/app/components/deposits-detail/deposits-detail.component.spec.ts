import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositsDetailComponent } from './deposits-detail.component';

describe('DepositsDetailComponent', () => {
  let component: DepositsDetailComponent;
  let fixture: ComponentFixture<DepositsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
