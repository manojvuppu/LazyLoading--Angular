import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { ApplyComponent } from './apply/apply.component';
import { PNF404leaveComponent } from './pnf404leave/pnf404leave.component';


@NgModule({
  declarations: [
    LeavesComponent,
    ApplyComponent,
    PNF404leaveComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule
  ]
})
export class LeavesModule { }
