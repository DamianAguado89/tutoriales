import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarthAguadoComponent } from './darth-aguado.component';

describe('DarthAguadoComponent', () => {
  let component: DarthAguadoComponent;
  let fixture: ComponentFixture<DarthAguadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarthAguadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarthAguadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
