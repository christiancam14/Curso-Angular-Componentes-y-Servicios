import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocales'
})
export class VocalesPipe implements PipeTransform {

  transform(value: string): string {
    var result: string[] = [''];
    value.split('').forEach((data) =>
    {
      switch (data){
        case 'a':
          result.push('4');
          break;
        case 'e':
          result.push('3');
          break;
        case 'i':
          result.push('1');
          break;
        case 'o':
          result.push('0');
          break;
        case 'u':
          result.push('5');
          break;
        default:
          result.push(data);
        // return result;
      }
      console.log("PRUEBA ", result);
    })
    return result.join('');
  }
}
