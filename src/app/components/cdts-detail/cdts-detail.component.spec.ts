import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdtsDetailComponent } from './cdts-detail.component';

describe('CdtsDetailComponent', () => {
  let component: CdtsDetailComponent;
  let fixture: ComponentFixture<CdtsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdtsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdtsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
