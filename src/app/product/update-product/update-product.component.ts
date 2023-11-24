import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreateProduct, HistoryPrice } from 'src/app/services/model/product.create';
import { UpdateProduct } from 'src/app/services/model/update.product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  
  productid!: number
  name: string = ''
  description: string = ''
  category!: number
  price!: number
  image: string = ''

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params): void => {
      this.productid = +params['id']

      this.productService.getProduct(this.productid).subscribe((response: any) => {
        this.name = response.name
        this.description = response.description
        this.category = response.category
        this.price = response.price
        this.image = response.image
        response.views -1
      })
    })
  }

  updateProduct(form: NgForm) {
    const priceHistory = new HistoryPrice(this.productid, this.price)
    var updateProduct = new UpdateProduct(this.name, this.description, this.category, this.price, this.image, priceHistory)
    this.productService.updateProduct(this.productid, updateProduct).subscribe({
      next: () => { alert('Product updated'), this.router.navigate(['products']) },
      error: (error) => (alert(error.errorMessage))
    })
  }

  onClickGoBack() {
    this.router.navigate(['products'])
  }
}
