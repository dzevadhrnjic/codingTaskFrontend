import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { ListProductsComponent } from "./product/list-products/list-products.component";
import { ProductDetailsComponent } from "./product/product-details/product-details.component";
import { CreateCategoryComponent } from "./category/create-category/create-category.component";
import { UpdateProductComponent } from "./product/update-product/update-product.component";
import { CreateProductComponent } from "./product/create-product/create-product.component";
import { CategoryComponent } from "./category/category.component";
import { ListCategoriesComponent } from "./category/list-categories/list-categories.component";
import { UpdateCategoryComponent } from "./category/update-category/update-category.component";
import { AuthGuard } from "./auth/auth.guard";
import { AuthComponent } from "./auth/auth.component";
import { ClosestProductsComponent } from "./product/closest-products/closest-products.component";

const appRoutes: Routes = [ 
    { path: 'auth', component: AuthComponent },
    { path: '', redirectTo: 'auth', pathMatch: 'full'},
    { path: 'products', component: ProductComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ListProductsComponent},
        { path: 'productDetails/:id', component: ProductDetailsComponent},
        { path: 'updateProduct/:id', component: UpdateProductComponent }
    ]},
    { path: 'categories', component: CategoryComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ListCategoriesComponent },
        { path: 'updateCategory/:id', component: UpdateCategoryComponent }
    ]},
    { path: 'newProduct', component: CreateProductComponent, canActivate: [AuthGuard] },
    { path: 'newCategory', component: CreateCategoryComponent, canActivate: [AuthGuard]},
    { path: 'closestProducts', component: ClosestProductsComponent, canActivate: [AuthGuard] }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}