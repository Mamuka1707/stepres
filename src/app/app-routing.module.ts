import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path: 'cart',component: CartComponent
},{path:'',component: BodyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
