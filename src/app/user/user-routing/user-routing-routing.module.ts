import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleSurahComponent, HomeComponent } from '../pages';
import { UserPageGuard } from '../user-page.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'surah/:surahId',
    component: SingleSurahComponent,
    canActivate:[UserPageGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingRoutingModule {}
