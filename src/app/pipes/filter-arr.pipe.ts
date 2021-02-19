import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArr',
})
export class FilterArrPipe implements PipeTransform {

  transform(value: Array<any>, filterProp, filterTerm: String): Array<any> {
    console.log('pipe!');

    const filteredArr = value.filter(item => {
      return item[filterProp].includes(filterTerm)
    })
    return filteredArr;
  }

}
