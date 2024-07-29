import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SortNumbers',
  /* pure is set to true by default */
  /* a pure pipe gets called only when there is a change in the input value */
  /* an inpure pipe gets called also when the view gets updated */
  pure: false
})
export class AppendTextPipe implements PipeTransform {

  /* main method for the custom pipe */
  /* : 'asc' | 'desc' is an example of the union type operator. basically an OR */
  /* transform(value: number): number {
    console.log('Counter incremented to ', value);
    return value;
  } */

  /* With this example, when the array gets modified, the pipe wont change the  */
  /* visible value unless we turn it into an inpure pipe */
  transform(value: number[]): number {
    let sum = 0;
    for (const num of value) {
      sum += num;
    }
    return sum
  }
}
