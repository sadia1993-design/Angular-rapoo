import { Component, OnInit    } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rapoo - It solutions |  Corporate template';

  

  ngOnInit(){
    
  }
  
  ngAfterViewInit(){
    $(document).ready(function(){
      $("p").click(function(){
      $("p").hide();
      });
    });
}
}
