import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ServicesComponent } from './Component/services/services.component';
import { PricingComponent } from './Component/pricing/pricing.component';
import { ProjectsComponent } from './Component/projects/projects.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ErrorComponent } from './Component/error/error.component';
import { SingleBlogComponent } from './Component/single-blog/single-blog.component';
import { SingleProjectsComponent } from './Component/single-projects/single-projects.component';
import { Layout1Component } from './Component/Layout/layout1/layout1.component';
import { Layout2Component } from './Component/Layout/layout2/layout2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PricingComponent,
    ProjectsComponent,
    ContactComponent,
    ErrorComponent,
    SingleBlogComponent,
    SingleProjectsComponent,
    Layout1Component,
    Layout2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
