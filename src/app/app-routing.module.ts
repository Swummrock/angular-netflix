import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'movies', component: MoviesListComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
