import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, CreateCategory, UpdateCategory } from './model/category';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  dataRefreshed = new Subject<boolean>();

  private url = 'http://localhost:9000/api/category/'

  constructor(private httpClient: HttpClient) { }

  getCategories(pageNumber: number, pageSize: number) {

    let params = new HttpParams();
    params = params.append('pageNumber', String(pageNumber))
    params = params.append('pageSize', String(pageSize))
    return this.httpClient.get<Category[]>(this.url, { params: params })
  }

  getCategory(id: number) {
    return this.httpClient.get<Category>(this.url + id)
  }

  addCategory(createCategory: CreateCategory) {
    return this.httpClient.post<Category>(this.url, createCategory)
  }

  updateCategory(id: number, updateCategory: UpdateCategory) {
    return this.httpClient.put(this.url + id, updateCategory)
  }

  deleteCategory(id: number) {
    return this.httpClient.delete(this.url + id)
  }
}
