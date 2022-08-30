import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  name:string;
  author: string;
  src:string;
  isdisabled:boolean;

  name2:string;
  author2:string;
  src2:string;
  text!:string;
  input:any;
  isShowing!:boolean;
  printSomething(){
    this.isdisabled=true;
  }
  enable(){
    console.log("enable");
    this.isdisabled=false;
    
  
  }
  showBooks(){

    this.isShowing=!this.isShowing;
  }
    

  

  constructor() {
    this.isdisabled=false;
    this.name='clean code';
    this.author='Robert C. Martin';
    this.src='../../assets/clean code.jpg';
    this.author2='Robert C. Martin';
    this.name2='clean architecture';
    this.text='';
    this.isShowing=false;
   
    this.src2='https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX258_BO1,204,203,200_.jpg';
   }


  ngOnInit(): void {
  }

  writesomething(){
    //get the element by input
    let input=document.querySelector('#input') as HTMLInputElement;
   if (input!=null){
      //pass
      //console log text
      console.log(input.value);
      this.text=input.value;

    
  }
  }
}
