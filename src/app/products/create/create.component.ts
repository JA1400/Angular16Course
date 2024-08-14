import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  //this is what we will send in our post request
  //also of type products for type safety
  //we also set initial values so we can enter 
  //values later when we bind the form
  newProductForm: Products = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(private productService: ProductsService,
    private router: Router) { }

  createProduct() {
    this.productService.createProduct(this.newProductForm)
      .subscribe({
        next: () => {
          //we can use this syntax with the router to redirect after submission
          this.router.navigate(['/products/home'])
        },
        error: (e) => {
          console.log(e);
        }
      })
  }
}
