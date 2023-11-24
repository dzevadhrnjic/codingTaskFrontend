import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { CreateProduct } from './model/product.create';
import { Subject } from 'rxjs';
import { UpdateProduct } from './model/update.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dataRefreshed = new Subject<boolean>();

  private url = 'http://localhost:9000/api/product/'

  constructor(private httpClient: HttpClient) { }

  getProducts(pageNumber: number, pageSize: number, order: string, productName: string) {

    let params = new HttpParams()
    params = params.append('pageNumber', String(pageNumber))
    params = params.append('pageSize', String(pageSize))
    params = params.append('order', order)
    params = params.append('productName', productName)

    return this.httpClient.get<Product[]>(this.url, { params: params })
  }

  getProduct(id: number) {
    return this.httpClient.get<Product>(this.url + id)
  }

  getClosestProducts(coordinates: any) {
    let params = new HttpParams()
    params = params.append('coordinates', coordinates)

    return this.httpClient.get<Product[]>(this.url + 'closest', { params: params })
  }

  addProduct(product: CreateProduct) {
    return this.httpClient.post<CreateProduct>(this.url, product)
  }

  updateProduct(id: number, updateProduct: UpdateProduct) {
    return this.httpClient.put(this.url + id, updateProduct)
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(this.url + id)
  }

}
