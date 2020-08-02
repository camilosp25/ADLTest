import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdtsComponent } from './cdts.component';

describe('CdtsComponent', () => {
  let component: CdtsComponent;
  let fixture: ComponentFixture<CdtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
