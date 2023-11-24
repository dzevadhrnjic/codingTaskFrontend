import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/services/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product!: Product
  products: Product[] = []

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params): void => {
      const id = +params['id']
      if (!isNaN(id)) {       
        this.getProductDetails(id);
      }
    })
  }

  getProductDetails(id: number) {
    this.productService.getProduct(id).subscribe({
      next: response => {
        this.product = response
        this.products = []
        this.products.push(response)
      },
      error: error => { alert(error.eror)}
    })
  }
}
