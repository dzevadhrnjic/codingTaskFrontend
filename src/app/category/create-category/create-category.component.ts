import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { CreateCategory } from 'src/app/services/model/category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  showForm: boolean = false

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryService.dataRefreshed.subscribe(form => {
      this.showForm = form;
    })
  }

  addCategory(form: NgForm) {
    const value = form.value

    var createCategory = new CreateCategory(value.name)
    this.categoryService.addCategory(createCategory).subscribe({
      next: () => { alert('Category created'), this.router.navigate(['categories']) },
      error: (error) => (alert(error.error))
    })
  }

  onClickGoBack() {
    this.router.navigate(['categories'])
  }
}
