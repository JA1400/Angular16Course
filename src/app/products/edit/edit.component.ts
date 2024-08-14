import { afterRender, Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newProductForm: Products = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(private productService: ProductsService,
    //we use this to view or params in the current route
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //we use this property to view the id in our params
    //it is an observable so we must subscribe to it
    this.route.paramMap.subscribe((param) => {
      //this uses the name we gave in our routing file
      let id = Number(param.get(`id`))
      this.getProductById(id);
    })
  }
  
  getProductById(id: number) {
    this.productService.getProductById(id)
      .subscribe(data => this.newProductForm = data)
  }

  updateProduct() {
    this.productService.updateProduct(this.newProductForm)
      .subscribe({
        next: () => {
          this.router.navigate(['/products/home'])
        },
        error: (e) => {
          console.log(e);
        }
      })
  }
}
