import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpr'
})
export class SearchprPipe implements PipeTransform {

  transform(items: any[], matchtext: string): any[] {
    if (!items) {
      return items;
    }
    if (!matchtext) {
      return items;
    }
    matchtext = matchtext.toLowerCase();

    return items.filter(it => {
      return it.toLowerCase.includes(matchtext);
    })

}
}
