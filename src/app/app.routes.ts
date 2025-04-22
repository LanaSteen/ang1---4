import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "students", component: StudentsComponent}
];
