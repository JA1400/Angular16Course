import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //assign an empty array as we usually get a collection of data
  products: Products[] = [];

  //we import the product service with our CRUD methods
  constructor(private productService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  //we create a method that calls our get request from the our services file
  getProducts() {
    //just like before, with a get() we must subscribe as it returns an observable
    this.productService.getProducts().subscribe((data) => {
      //we then assign that data to our Products[] array
      this.products = data;
    })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      //even tho the item gets removed from the database, we need to remove it 
      //from our array by essentially creating a new array of products, and simply 
      //filtering out the products that dont match our deleted id
      this.products = this.products.filter(product => product.id != id);
    })
  }
}
