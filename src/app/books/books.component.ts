import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
  src: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  
  isdisabled:boolean;


  text!:string;
  input:any;
  isShowing!:boolean;
  show_books!:string;
  books!:Book[]
  printSomething(){
    this.isdisabled=true;
  }
  enable(){
    console.log("enable");
    this.isdisabled=false;
    
  
  }
  showBooks(){

    this.isShowing=!this.isShowing;
    if(this.isShowing){
      this.show_books="Hide books";
    }
    else{
      this.show_books="Show books";
    }
  }

    

  

  constructor() {
    this.books=[ //this is the buggy code 
      {
        name:"clean code",
        author:"Robert C. Martin",
        src:"https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg"
       
      
       },
       {
        name:"Elements of Programming Interviews ",  
        author:"Martin Fowles",
        src:"https://images-na.ssl-images-amazon.com/images/I/41CUbGSthHL._SX348_BO1,204,203,200_.jpg"
       }
    ]
    this.isdisabled=false;
   
 
    this.text='';
    this.isShowing=false;
    this.show_books='show books'; 
   

   
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
