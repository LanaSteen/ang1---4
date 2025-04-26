import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "students", component: StudentsComponent},
    {path: "user", component:UserComponent},
    {path: "details/:id", component:UserDetailsComponent},
];
