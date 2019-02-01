import { Component, OnInit } from '@angular/core';
import { UserService } from '';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  
  email:string;

  constructor() { }

  ngOnInit() {
  }
  checkexists(){
    console.log("helloooo"+this.email);

  }
}
