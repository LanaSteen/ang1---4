import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "students", component: StudentsComponent},
    {path: "user", component:UserComponent},
    {path: "details/:id", component:UserDetailsComponent},
    {path: "products", component: ProductsComponent},
    {path: "products/:id", component: ProductDetailsComponent}
];
