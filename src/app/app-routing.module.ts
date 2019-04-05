import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { IntervalsComponent } from './modules/intervals/components/intervals/intervals.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'intervals', component: IntervalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
