import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicarPage } from './publicar.page';

import { PublicarPageRoutingModule } from './publicar-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PublicarPage }]),
    PublicarPageRoutingModule,
  ],
  declarations: [PublicarPage]
})
export class PublicarPageModule {}
