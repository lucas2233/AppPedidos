import { Routes ,RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'restaurantes',
  pathMatch: 'full'
},
{
  path: 'home',
  loadChildren: './home/home.module#HomePageModule'
},
{
  path: 'list',
  loadChildrean: './list/list.module#ListPageModule'
},
{
 path: 'restaurantes',
 loadChildren: './restaurantes/restaurantes.mudule#RestaurantesPageModule'
},
{ path: 'cardapio/:id', 
loadChildren: './cardapio/cardapio.module#CardapioPageModule'

}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}