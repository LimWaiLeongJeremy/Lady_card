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
  playerList: Player[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      playerName: ['', Validators.required],
      ladyCard: [false],
      toiletCard: [false],
      madCard: [false],
    })
  };

  addPlayer(){
    const newPlayer ={
      playerName: this.playerForm.value.playerName,
      ladyCard: this.playerForm.value.ladyCard,
      toiletCard: this.playerForm.value.toiletCard,
      madCard: this.playerForm.value.madCard
    };
    this.playerList.push(newPlayer);
    console.log(this.playerList);
  }

  startGame() {
    this.router.navigateByUrl('/game');
  }

}
