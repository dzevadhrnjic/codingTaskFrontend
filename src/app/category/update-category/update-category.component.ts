import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { CreateCategory } from 'src/app/services/model/category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  id!: number
  name: string = ''

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params): void => {
      this.id = +params['id']

      this.categoryService.getCategory(this.id).subscribe((response: any) => {
        this.name = response.name
      })
    })
  }

  updateCategory(form: NgForm) {
    const value = form.value

    var createCategory = new CreateCategory(value.name)
    this.categoryService.updateCategory(this.id, createCategory).subscribe({
      next: () => { alert('Category updated'), this.router.navigate(['categories']) },
      error: (error) => (alert(error.error))
    })
  }

  onClickGoBack() {
    this.router.navigate(['categories'])
  }
}
