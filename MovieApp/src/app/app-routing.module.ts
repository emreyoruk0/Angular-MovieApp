import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  { path:'', component: DashboardComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'movies', component: MoviesComponent },
  { path:'detail/:id', component: MovieDetailComponent }
]; //localhost:4200/... dediğimizde gelecek olan componenti ayarladık burda. Boş oldugunda da dashboarda gitmesini söyledik


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }






// ng g m app-routing --flat --module=app
// cli ile router oluşturma
// export kısmı falan otomatik oluşturulmaz ama oraları biz yazmalıyız

