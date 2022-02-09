import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  {
    path: 'create/card',
    component: CreateCardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CardsRoutingModule {}
