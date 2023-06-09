import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:NavComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'menu',component:MenuComponent},
    {path:'products',component:ProductsComponent},
    {path:'contact',component:ContactComponent}
    ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
