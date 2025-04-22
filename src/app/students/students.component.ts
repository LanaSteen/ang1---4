import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IStudent } from '../interfaces/students.interface';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  studentsArray: IStudent[] = []

  student: IStudent = new Student()

  addStudent(){
    this.studentsArray.push(this.student)
    this.student = new Student()
  }

  deleteStrudent(index: number){
    this.studentsArray.splice(index, 1)
  }
}
