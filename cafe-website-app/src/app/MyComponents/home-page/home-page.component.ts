import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  Testing() {
    var name = $("txtName").val();
    alert(name);
  }


}
