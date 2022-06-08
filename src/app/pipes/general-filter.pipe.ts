import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generalKeyValueFilter'
})
export class GeneralKeyValueFilterPipe implements PipeTransform {

  public transform(heroes: any[], searchText: any, keyValue: any): any {

    if (searchText == null || searchText === '' || heroes == null || keyValue == null) {
      return heroes;
    }
    return heroes.filter(hero => hero[keyValue].toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}
