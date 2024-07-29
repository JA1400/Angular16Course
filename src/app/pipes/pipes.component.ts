import { state } from '@angular/animations';
import { Component, ViewChild, ElementRef, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  /* title = 'Example of pipe expression';
  showDate: Date = new Date(); */

  /* employees = [
    { name: 'jason smith', state: 'wisconsin', salary: 50000 },
    { name: 'jessica day', state: 'alabama', salary: 65000 },
    { name: 'tiffany swift', state: 'florida', salary: 120000 },
    { name: 'rick rogers', state: 'california', salary: 20400 }
  ] */

  /* page navigation */
  /* products: { name: string, imageUrl: string }[] = [
    { name: 'Image1', imageUrl: './assets/MakeupIMG25.jpg' },
    { name: 'Image2', imageUrl: './assets/MakeupIMG26.jpg' },
    { name: 'Image3', imageUrl: './assets/MakeupIMG27.jpg' },
    { name: 'Image4', imageUrl: './assets/MakeupIMG28.jpg' }
  ]

  pgSize: number = 2;
  startI: number = 0;
  endI: number = this.pgSize;

  prevPage() {
    this.startI -= this.pgSize;
    this.endI -= this.pgSize;
  }

  nextPage() {
    this.startI += this.pgSize;
    this.endI += this.pgSize;
  } */

  /*  pi = 3.14159 */

  /* wPound: number = 0
  wKilo: number = 0;

  convert() {
    this.wKilo = this.wPound * 0.453592
  } */

  /* userDetails = {
    name: 'Angel',
    email: 'test@email.com',
    address: {
      street: '123 Main st',
      city: 'las vegas',
      state: 'nevada'
    }
  } */

  /* numbers = [1, 5, 4, 8, 6]
  sortOrder = 'asc';
  showList: boolean = false;

  get sortedNumbers() {
    const sortedArr = [...this.numbers].sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a - b;
      }

      return b - a;
    });

    return sortedArr;
  }

  showSorting() {
    this.showList = true
  } */

  /* counterVal = 0;

  incrementCounter() {
    this.counterVal++;
  } */

  /* myArray = [1, 2, 3];

  updateValue(){
    this.myArray.push(5)
  } */
}
