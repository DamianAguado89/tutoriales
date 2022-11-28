/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DarthToastComponent } from './darth-toast.component';

describe('DarthToastComponent', () => {
  let component: DarthToastComponent;
  let fixture: ComponentFixture<DarthToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarthToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarthToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
