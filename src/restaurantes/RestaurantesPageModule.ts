import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RestaurantesPage } from './restaurantes.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RestaurantesPage
      }
    ])
  ],
  declarations: [RestaurantesPage]
})
export class RestaurantesPageModule {
}
