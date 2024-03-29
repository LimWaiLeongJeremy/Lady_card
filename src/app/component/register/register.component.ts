import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Player } from "../../model/player";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  playerForm!: FormGroup;
  playerList: Player[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,) {}

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      playerName: ['', Validators.required],
    })
  };

  addPlayer(){
    // TODO: Title cap the player name.
    const newPlayer ={
      playerName: this.playerForm.value.playerName,
      ladyCard: false,
      toiletCard: false,
      madCard: false
    };

    const isDuplicate = this.playerList.some(player => player.playerName === newPlayer.playerName)
    if (isDuplicate) {
      console.log("Player already in game")
      // TODO: return a msg
    } else {
      this.playerList.push(newPlayer);
      console.log(this.playerList)
    }
  }

  removePlayer(playerName: string) {
    this.playerList.forEach((player, index) => {
      if ( player.playerName === playerName ) {
        this.playerList.splice(index, 1);
      }
    })
    console.log(this.playerList)
  }

  startGame() {
    sessionStorage.setItem("players", JSON.stringify(this.playerList));
    this.router.navigateByUrl('/game');
  }

}
