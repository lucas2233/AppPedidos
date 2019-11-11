import { Restaurante } from '../models/restaurante/restaurante';
import {RestaurantesService} from './restaurantes.service';
import { Component } from '@angular/core';
import {NavController,LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-restaurantes',
  templateUrl: 'restaurantes.page.html',
  styleUrls: ['restaurantes.page.css']
})
export class RestaurantesPage {
  restaurantes : Restaurante[];
  constructor(
    private service: RestaurantesService,
    public loadingController:LoadingController,
    public navCtrl:NavController ){
} 
 ngOnInit(){
   this.presentLoading();
   this.getRestaurantes();
 }
  getRestaurantes(): void {
    this.service.getRestaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes);
      
  }
   async presentLoading(){
     const loading = await
     this.loadingController.create({
      content: "Carregando..."
     });
     return await loading.present();
   }
}
