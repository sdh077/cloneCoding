import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteComponent } from './lotte.component';

describe('LotteComponent', () => {
  let component: LotteComponent;
  let fixture: ComponentFixture<LotteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
