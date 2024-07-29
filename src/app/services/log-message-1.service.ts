import { Injectable } from '@angular/core';

@Injectable()
export class LogMessage1Service {

  /* log(): void {
    console.log('This is Service 1');
  } */

  showAlert() {
    console.log('This is Service 1');
  }
}
