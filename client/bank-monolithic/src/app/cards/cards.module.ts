import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCardComponent } from './create-card/create-card.component';
import { CardsRoutingModule } from './cards-routing.module';

@NgModule({
  declarations: [CreateCardComponent],
  imports: [CommonModule, CardsRoutingModule],
})
export class CardsModule {}
