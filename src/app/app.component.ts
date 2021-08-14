import { Component, OnInit    } from '@angular/core';
import * as $ from 'jquery';
import {} from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  OnInit(){
    
    
  }
  ngOnInit(): void {
    
 }

  

  // for jquery
  ngAfterViewInit(){
    $(window).on('load', function() {
      $('#page-loader').fadeOut('slow', function() {
          $(this).remove();
      });
  });

 

}
}
