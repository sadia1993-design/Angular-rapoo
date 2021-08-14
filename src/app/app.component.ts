import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit    } from '@angular/core'
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
 
  ngOnInit(): void { 
    
    
   }

  
  onActive(){
    window.scroll(0,0);
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
