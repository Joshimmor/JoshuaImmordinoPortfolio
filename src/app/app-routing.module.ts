import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NCAAComponent } from './ncaa/ncaa.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path: 'Projects/:user/:project/:branch/:file', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
