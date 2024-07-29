import { Component } from '@angular/core';
import { CubeService } from '../dependencies/cube.service';
import { PowerService } from '../dependencies/power.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css'],
  /* we establish the necessary dependencies here */
  /* even though the CubeService has the PowerService constructor, it needs to be listed  */
  /* here to work properly */
  providers: [CubeService, PowerService]
})
export class ServiceExampleComponent {
  constructor(public cubeService: CubeService){}

  calculateCube(): number{
    return this.cubeService.calculateCube(5);
  }
}
