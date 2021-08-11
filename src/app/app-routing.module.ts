import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ServicesComponent } from './Component/services/services.component';
import { ProjectsComponent } from './Component/projects/projects.component';
import { PricingComponent } from './Component/pricing/pricing.component';
import { SingleBlogComponent } from './Component/single-blog/single-blog.component';
import { SingleProjectsComponent } from './Component/single-projects/single-projects.component';

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
