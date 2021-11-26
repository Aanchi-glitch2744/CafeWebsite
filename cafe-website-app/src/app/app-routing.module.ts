import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './MyComponents/home-page/home-page.component';
import { AboutPageComponent } from './MyComponents/about-page/about-page.component';
import { LoginComponent } from './MyComponents/login/login.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},  //Do not add slash for path in Angular
  {path: 'about', component: AboutPageComponent},  //Display router about endpoint. Where? => Router outlet.
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
