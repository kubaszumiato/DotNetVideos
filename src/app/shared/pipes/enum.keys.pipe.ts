import {Pipe, PipeTransform} from 'angular2/core';

//http://stackoverflow.com/questions/35750059/select-based-on-enum-in-angular2
@Pipe({name: 'keys'})
export class EnumKeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (var enumMember in value) {
      var isValueProperty = parseInt(enumMember, 10) >= 0
      if (isValueProperty) {
        keys.push({key: enumMember, value: value[enumMember]});       
      } 
    }
    return keys;
  }
}