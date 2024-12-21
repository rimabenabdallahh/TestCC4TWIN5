import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/showteams ', pathMatch: 'full' },
  
  {path: 'Show teams', 
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
  },
  {path: 'Add Team', 
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
  },
  {path: 'Show my Teams', 
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
  },

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
