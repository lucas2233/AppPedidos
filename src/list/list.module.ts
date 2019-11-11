import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
{
  path:'',
  redirectTo:'restaurantes',
  pathMatch:'full'
},
{
  path: 'home',
  loadChildren: './home/home.module#HomePageModule'
},
{
  path: 'list',
  loadChildren:'./list/list.module#ListPageModule'
},
{
  path: 'restaurantes',
  loadChildren: './restaurantes/restaurantes.module#RestaurantesPageModule'
}
];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
