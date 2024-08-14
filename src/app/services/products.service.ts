import { Injectable } from '@angular/core';
import { Products } from '../products/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  //we use a produtcs array since we will 
  getProducts() {
    return this.http.get<Products[]>(this.url);
  }
  //we use type products to ensure type safety
  createProduct(newP: Products) {
    //we also estabish the parameter type
    return this.http.post<Products>(this.url, newP);
  }

  getProductById(id: number) {
    //we dont use an array here since were only getting one item
    //we pass in the id to pull that specific item
    return this.http.get<Products>(`${this.url}/${id}`);
  }

  updateProduct(data: Products) {
    //much like express, we pass the indiviaul product link and its own id 
    return this.http.put<Products>(`${this.url}/${data.id}`, data);
  }

  deleteProduct(id: number) {
    //simply use the id to find and delete the item
    return this.http.delete<Products>(`${this.url}/${id}`);
  }
}
