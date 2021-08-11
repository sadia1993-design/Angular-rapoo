import { Component, OnInit    } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    
  }

  // for js
  onClick() {
    alert("hello");
  }

  // for jquery
  ngAfterViewInit(){
    $(document).ready(function(){
      $("p").click(function(){
      $("p").hide();
      });
    });
}
}
