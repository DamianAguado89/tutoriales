import { TestBed } from '@angular/core/testing';

import { DarthAguadoService } from './darth-aguado.service';

describe('DarthAguadoService', () => {
  let service: DarthAguadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarthAguadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
