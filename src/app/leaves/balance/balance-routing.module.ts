import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceComponent } from './balance.component';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { PNF404balanceComponent } from './pnf404balance/pnf404balance.component';


const routes: Routes = [
  {
    path: 'balance', component: BalanceComponent, children: [
      
      {
        path: 'casual', component: CasualComponent
      },
      {
        path: 'earned', component: EarnedComponent
      },
      {
        path: '', redirectTo: 'casual', pathMatch: 'full'
      },
      { path: '**', component:  PNF404balanceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceRoutingModule { }
