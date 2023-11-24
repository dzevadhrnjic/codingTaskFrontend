import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/services/model/product';
import { CreateProduct, HistoryPrice } from 'src/app/services/model/product.create';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  showForm: boolean = false

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.dataRefreshed.subscribe(form => {
      this.showForm = form;
    })
  }

  addProduct(form: NgForm) {
    const value = form.value

    const priceHistory = new HistoryPrice(value.productid, value.price)
    var createProduct = new CreateProduct(value.name, value.description, value.category,
      value.price, value.views, value.image, value.coordinates, priceHistory)
    this.productService.addProduct(createProduct).subscribe({
      next: () => { alert('Product created'), this.router.navigate(['products']) },
      error: (error) => (alert(error.error))
    })
  }

  onClickGoBack() {
    this.router.navigate(['products'])
  }
}
