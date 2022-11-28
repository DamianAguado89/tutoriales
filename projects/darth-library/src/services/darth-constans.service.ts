import { Injectable } from '@angular/core';
import { DarthBlockListConstants, DarthToastConstans } from '../constans/darth-constans';

@Injectable({
  providedIn: 'root'
})
export class DarthConstansService {

  DarthToastConstans = DarthToastConstans;
  DarthBlockListConstants = DarthBlockListConstants;
  constructor() { }

}
