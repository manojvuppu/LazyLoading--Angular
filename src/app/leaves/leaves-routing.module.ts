import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { BalanceComponent } from './balance/balance.component';
import { LeavesComponent } from './leaves.component';
import { PNF404leaveComponent } from './pnf404leave/pnf404leave.component';
import { CasualComponent } from "./balance/casual/casual.component"
import { EarnedComponent } from "./balance/earned/earned.component"
import { PNF404balanceComponent } from "./balance/pnf404balance/pnf404balance.component"



const routes: Routes = [
  {
    path: 'leaves', component: LeavesComponent, children: [
      {
        path: 'apply', component: ApplyComponent
      },
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
          { path: '**', component: PNF404balanceComponent }
        ]
      },
      {
        path: '', redirectTo: 'apply', pathMatch: 'full'
      },
      { path: '**', component: PNF404leaveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
