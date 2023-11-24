import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/services/model/product';
import { UpdateProduct } from 'src/app/services/model/update.product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  product!: Product
  products: Product[] = []
  pageNumber: number = 0;
  pageSize: number = 10;
  order!: string
  productName: string = '';

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productService.dataRefreshed.subscribe(data => {
      if (data) {
        this.getProducts()
      }
    })

    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts(this.pageNumber, this.pageSize, this.order, this.productName).subscribe({
      next: (response) => { this.products = response, console.log(response) },
      error: (error) => { alert('Something went wrong') }
    })
  }

  onClickSeeProductDetails(id: number) {
    this.router.navigate(['productDetails', id], { relativeTo: this.route })
  }

  onClickEditProduct(product: Product) {
    this.router.navigate(['updateProduct/', product.id], { relativeTo: this.route })
  }

  onClickDeleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        alert('Product deleted'),
        this.productService.dataRefreshed.next(true)
      },
      error: () => { alert("Can't delete product") }
    })
  }

  nextPage() {
    this.pageNumber++
    this.getProducts()
  }

  previousPage() {
    this.pageNumber--
    this.getProducts()
  }
}
