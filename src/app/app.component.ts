import { Component, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rapoo - It solutions |  Corporate template';

  

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      $("p").click(function(){
      $(this).hide();
      });
    });
}
}
