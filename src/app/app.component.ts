import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
   greeting = 'Hello World!'

   age = 30


   text? : string | null
   
    // nullable

    text2! : string

   // ! გამოყენებისას მივაწვდით ინფომრაციას


    user = {
       name : "John",
       lastName : "Doe",
       age : 50       
    }

    isActive : boolean = true


    numArr : (string | number)[] =["jgfgf", 11]
    imgLink = "https://images.unsplash.com/photo-1742590794223-5e55f1c9e63f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
    mainColor = ""



    printHello(){
      console.log("hi")
      this.mainColor="mainColor"
    }



    forChangindColor = ""


    chnageCOlor(){
      this.forChangindColor=="" ? this.forChangindColor ="forColor" : this.forChangindColor =""
    }
 
}






