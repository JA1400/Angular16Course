import { Component } from '@angular/core';
import { ProductService } from '../dependencies/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  /* Dependency injection */
  names: string[];

  constructor(private pS: ProductService) {
    this.names = this.pS.getNames();
  }
}
