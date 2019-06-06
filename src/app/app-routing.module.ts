import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { BuilderComponent } from './components/builder-components/builder/builder.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full'},
  { path: 'builder', component: BuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
