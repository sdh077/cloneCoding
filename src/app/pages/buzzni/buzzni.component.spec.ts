import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzniComponent } from './buzzni.component';

describe('BuzzniComponent', () => {
  let component: BuzzniComponent;
  let fixture: ComponentFixture<BuzzniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
