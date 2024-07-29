import { Injectable } from '@angular/core';
import { ADMIN_DATA } from '../ADMIN_DATA/admin-data';

@Injectable()
export class AdminDataService {

  getData: any;
  /* When this service is injected, the contructor runs and grabs the data from ADMIN_DATA and stores it in the getData variable */
  constructor() { 
    this.getData = ADMIN_DATA;
  }
}
