import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ServicesComponent } from './Component/services/services.component';
import { ProjectsComponent } from './Component/projects/projects.component';
import { PricingComponent } from './Component/pricing/pricing.component';
import { SingleBlogComponent } from './Component/single-blog/single-blog.component';
import { SingleProjectsComponent } from './Component/single-projects/single-projects.component';
import { ErrorComponent } from './Component/error/error.component';
import { Layout1Component } from './Component/Layout/layout1/layout1.component';
import { Layout2Component } from './Component/Layout/layout2/layout2.component';
import { ContactComponent } from './Component/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'single-blog', component: SingleBlogComponent},
  { path: 'single-projects', component: SingleProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AboutComponent,ServicesComponent,ProjectsComponent,PricingComponent,SingleBlogComponent,SingleProjectsComponent,ErrorComponent,Layout1Component,Layout2Component,ContactComponent]