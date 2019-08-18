import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipeDemo'
})
export class PipeDemoPipe implements PipeTransform {

  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
