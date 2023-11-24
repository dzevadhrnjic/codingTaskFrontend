import { Component } from '@angular/core';
import { Product } from 'src/app/services/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-closest-products',
  templateUrl: './closest-products.component.html',
  styleUrls: ['./closest-products.component.css']
})
export class ClosestProductsComponent {

  coordinates: any
  products: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  getClosestProducts() {
    this.productService.getClosestProducts(this.coordinates).subscribe({
      next: (response) => { this.products = response },
      error: (error) => { alert( error.errorMessage )}
    })
  }
}
