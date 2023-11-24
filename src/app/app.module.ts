import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductComponent } from './product/product.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { ListCategoriesComponent } from './category/list-categories/list-categories.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { AuthComponent } from './auth/auth.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ClosestProductsComponent } from './product/closest-products/closest-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListProductsComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    HeaderComponent,
    CategoryComponent,
    ListCategoriesComponent,
    CreateCategoryComponent,
    AuthComponent,
    UpdateProductComponent,
    UpdateCategoryComponent,
    ClosestProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
