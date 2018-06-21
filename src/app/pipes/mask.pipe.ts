import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): any {
    if(activar) {
      return "*".repeat(value.length);
    }
    return value;
  }

}
