import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from 'src/app/models/team';
import { TeamserviceService } from 'src/app/Service/teamservice.service';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent implements OnInit{
 teamForm!:FormGroup;
  team : Team = new Team();
  message: { [key: string]: string } = {
    required: 'Ce champ est obligatoire',
    minlength: 'La description doit contenir au moins 5 caractères',
  };
   constructor(private fb: FormBuilder,
    
    private _teamService: TeamserviceService,
   ) {}
   ngOnInit() {
  
    this.teamForm = this.fb.group({

      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      projectDescription: ['', [ Validators.minLength(5)]],
      projectName:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      level:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      
    });
  }
   getErrorMessage(controlName: string): string[] {
    const control = this.teamForm.get(controlName);
    if (control && control.errors && control.touched) {
      return Object.keys(control.errors).map(key => this.message[key] || key);
    }
    return [];
  }
 submit(){
    console.log(this.teamForm);
  
   // this.menu.title=this.menuForm.value.titre;
   // this.menu.description=this.menuForm.value.description;
   // this.menu.approved=false;
  //  this.menu.mark=0;
  //  console.log(this.menu);
    this._teamService.add<Team>('teams',this.team).subscribe({
      next: (response) => {
        console.log('TEAM added successfully', response);
      },
      error: (error) => {
        console.error('Error adding team', error);
      }
    });
  }


}
