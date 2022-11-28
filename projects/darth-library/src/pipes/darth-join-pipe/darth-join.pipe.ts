import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class DarthJoinPipe implements PipeTransform {

  transform(value: string[], separator: string = ','): any {
    if(!value){
      return 'vacio';
    }
    return value.join(separator);
  }

}
