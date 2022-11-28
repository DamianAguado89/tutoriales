import { Pipe, PipeTransform } from '@angular/core';
import { DarthConfigService } from './darth-config.service';

@Pipe({
  name: 'darthConfig'
})
export class DarthConfigPipe implements PipeTransform {

  constructor(
    private darthConfig: DarthConfigService
  ){}

  transform(path: string): any {
    return this.darthConfig.getData(path);
  }

}
