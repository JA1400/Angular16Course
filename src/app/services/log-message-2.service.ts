import { Injectable } from '@angular/core';

@Injectable()
export class LogMessage2Service {

  /* log(): void {
    console.log('This is Service 2');
  } */

  showAlert() {
    console.log('This is Service 2');
  }
}