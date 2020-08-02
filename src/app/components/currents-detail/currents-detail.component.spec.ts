import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentsDetailComponent } from './currents-detail.component';

describe('CurrentsDetailComponent', () => {
  let component: CurrentsDetailComponent;
  let fixture: ComponentFixture<CurrentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
