import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/services/model/category';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {

  category!: Category
  categories: Category[] = []

  pageNumber: number = 0
  pageSize: number = 10

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryService.dataRefreshed.subscribe(data => {
      if (data) {
        this.getCategories()
      }
    })

    this.getCategories()
  }

  getCategories() {
    this.categoryService.getCategories(this.pageNumber, this.pageSize).subscribe({
      next: (response) => { this.categories = response },
      error: () => { alert('Something went wrong') }
    })
  }

  onClickEditCategory(category: Category) {
    this.router.navigate(['updateCategory', category.id], { relativeTo: this.route })
  }

  onClickDeleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe({
      next: () => {
        alert('Category deleted'),
        this.categoryService.dataRefreshed.next(true)
      },
      error: () => alert('Something went wrong')
    })
  }

  nextPage() {
    this.pageNumber++
    this.getCategories()
  }

  previousPage() {
    this.pageNumber--
    this.getCategories()
  }
}
