import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit { 

  name:any = '';
  email:any = '';
  subject:any = '';
  phone:any = '';
  message:any = '';  

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }
  saveForm(){
    const data = JSON.stringify( {name:this.name, email: this.email, subject: this.subject, phone: this.phone, message: this.message} );
    this.http.post('http://localhost/business/api/contact.php', data).subscribe((res)=>{
       this.name = "";
       this.email = "";
       this.subject = "";
       this.phone = "";
       this.message = "";

    })
  }

}
