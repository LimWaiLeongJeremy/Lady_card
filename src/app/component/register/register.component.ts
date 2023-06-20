import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Player } from "../../model/player";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  playerForm!: FormGroup;
  playerList!: Player[];

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      playerName: ['', Validators.required]
    })
  }



  addPlayer(){
    const playerName = this.playerForm.value;
    this.playerList.push(playerName);
    console.log(this.playerList);
  }

  startGame() {
    this.router.navigateByUrl('/game');
  }

  private createPlayer(playerName: Player|null = null): FormGroup {
    return this.formBuilder.group({
      playerName: this.formBuilder.control(playerName?.playerName? playerName.playerName: '', [Validators.required]),
      ladyCard: false,
      toiletCard: false,
      madCard: false
    })
  }
}
