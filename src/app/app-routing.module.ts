//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { Page404Component } from './page404/page404.component';
import { LeavesComponent } from './leaves/leaves.component';
import { BalanceModule } from './leaves/balance/balance.module';
import { LeavesModule } from './leaves/leaves.module';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'attendance', component: AttendanceComponent },
    { path: 'leaves', component: LeavesComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: Page404Component },
];
@NgModule({
    imports: [
        BalanceModule,
        LeavesModule,
        RouterModule.forRoot(routes,{ enableTracing: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { } 