import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { FormTeamComponent } from './form-team/form-team.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';

const routes: Routes = [
 { path: 'Show teams',component: TeamsComponent}, 
  {path: 'Add Team ',component: FormTeamComponent},
  {path: 'Show my Teams',component: MyTeamsComponent}, 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
