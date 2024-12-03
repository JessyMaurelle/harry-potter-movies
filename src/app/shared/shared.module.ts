import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { DurationPipe } from '../duration.pipe'; 


@NgModule({
  //declarations: [DurationPipe], // Déclarez le pipe ici
  imports: [CommonModule],      // Si besoin, importez d'autres modules de base
 // exports: [DurationPipe],      // Exposez le pipe pour qu'il soit utilisable ailleurs
})
export class SharedModule {}
