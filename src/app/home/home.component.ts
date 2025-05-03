import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  constructor(
     private common : CommonService,
     private api : ApiService
    ){

  }

  ngOnInit(){

    this.api.getProduct().subscribe((resp :any) => {
      console.log(resp)
      this.productArr = resp
     })

  }


  title = "saxeli"
  num! : number | null


  user = {
    name : "",
    email : "",
    age : 0
  }

  userArr = []

  pic = "https://images.unsplash.com/photo-1735825764445-af30f44dc49f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  numArr : (number | null)[]  = []
  
  isAcceptabel = false

  showList(){
    this.isAcceptabel ? this.isAcceptabel = false : this.isAcceptabel= true 
  }

  save(){
    this.numArr.unshift(this.num)
    this.num = null
    console.log(this.numArr)

  }

  delete(ind : number){
      this.numArr.splice(ind, 1)
  }


 productArr : Product[] = []


  printHi(){
     this.common.print()





  }
}
