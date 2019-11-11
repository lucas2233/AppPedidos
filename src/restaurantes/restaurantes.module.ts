import { RestaurantesPageModule } from './restaurantes.module';

import { HttpClientModule } from '@angular/common/http';
import { RestaurantesPageModule} from '@angular/Module';
import {  NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {RestaurantesPage} from './restaurantes.page';
import {RestaurantesService} from './restaurantes.service';

@NgModule({
   imports:[
     CommonModule,
     FormsModule,
     IonicModule,
     HttpClientModule,
     RouterModule.forChild([
       {
         path:'',
         component: RestaurantesPage
       }
     ])
   ],
   providers:[
    RestaurantesService
  ],
   
   declarations: [RestaurantesPage]
})
export class RestaurantesPageModule {}