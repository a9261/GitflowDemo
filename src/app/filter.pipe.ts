import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

  transform(value : any, args?: any) : any {
    switch(args) {
      case 'Active':
        return value.filter(item => {
          return !item.done;
        });
      case 'Completed':
        return value.filter(item => {
          return item.done;
        });
      default:
        return value;
    }
  }

}
