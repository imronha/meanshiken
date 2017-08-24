import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewpollComponent } from './newpoll/newpoll.component';
import { ShowpollComponent } from './showpoll/showpoll.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'newpoll', component: NewpollComponent},
    { path: 'polls/:id', component: ShowpollComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
