import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 title:any="this is my first header"
 show:any=""
 isdisabled:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
myButton(){
  let get:any=document.getElementById("enter") as HTMLInputElement
  if(get.value!=null){
  this.isdisabled=false;
  get.value=" "
  this.isdisabled=true
}
  else if(get.value==null) {
    this.isdisabled=true
    console.log("no entry in input field");
  } 
}
// toggle(){
//   this.isdisabled=false
// }
onclick(event:any){
  
   this.show=event.target.value
  console.log("it works")
  let get:any=document.getElementById("enter") as HTMLInputElement
  if(get.value!=null){
    this.isdisabled=false
  }
}
}