import { Participant } from "./participant";

export class Team {
    id! : number;
name! : string;
projectName!:string ;
level!:string ;
participants !:Participant[] ;
projectDescription! :string ;
}
