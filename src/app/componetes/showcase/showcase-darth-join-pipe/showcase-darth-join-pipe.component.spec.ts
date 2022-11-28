/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowcaseDarthJoinPipeComponent } from './showcase-darth-join-pipe.component';

describe('ShowcaseDarthJoinPipeComponent', () => {
  let component: ShowcaseDarthJoinPipeComponent;
  let fixture: ComponentFixture<ShowcaseDarthJoinPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseDarthJoinPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseDarthJoinPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
