import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, matchText:string) {
    if(value === ''){
      return value
    }

    const prods=[]
    for(const product of value){
      if (product['pname'] === matchText){
        prods.push(product);
      }
    }
    return prods;
  }

}
