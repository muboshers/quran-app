import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleSurahComponent, HomeComponent } from '../pages';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'surah/:surahId',
    component: SingleSurahComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingRoutingModule {}
