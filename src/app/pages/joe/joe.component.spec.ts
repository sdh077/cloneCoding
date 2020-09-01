import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoeComponent } from './joe.component';

describe('JoeComponent', () => {
  let component: JoeComponent;
  let fixture: ComponentFixture<JoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
