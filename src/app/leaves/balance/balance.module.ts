import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
//import { BalanceComponent } from './balance.component';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { BalanceComponent } from './balance.component';
import { PNF404balanceComponent } from './pnf404balance/pnf404balance.component';


@NgModule({
  declarations: [
    BalanceComponent,
    CasualComponent,
    EarnedComponent,
    PNF404balanceComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule
  ]
})
export class BalanceModule { }
