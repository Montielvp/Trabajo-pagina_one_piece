import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPersonajePageRoutingModule } from './detalles-personaje-routing.module';

import { DetallesPersonajePage } from './detalles-personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPersonajePageRoutingModule
  ],
  declarations: [DetallesPersonajePage]
})
export class DetallesPersonajePageModule {}
