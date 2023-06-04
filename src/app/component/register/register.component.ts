import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { Player } from "../../model/player";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  playerForm!: FormGroup;
  playerList!: Player[];

  constructor(private router: Router) {}

  addPlayer(){
    
  }

  startGame() {
    this.router.navigateByUrl('/game');
  }
}
