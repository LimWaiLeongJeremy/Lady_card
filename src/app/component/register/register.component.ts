import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Player } from "../../model/player";
import { RegisterServiceService } from 'src/app/service/register-service.service';
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
    private formBuilder: FormBuilder,
    private regSvc: RegisterServiceService) {}

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      playerName: ['', Validators.required],
      ladyCard: [false],
      toiletCard: [false],
      madCard: [false],
    })
  };

  addPlayer(){
    // TODO: Title cap the player name.
    const newPlayer ={
      playerName: this.playerForm.value.playerName,
      ladyCard: this.playerForm.value.ladyCard,
      toiletCard: this.playerForm.value.toiletCard,
      madCard: this.playerForm.value.madCard
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
    this.regSvc.storePlayerList(this.playerList)
    this.router.navigateByUrl('/game');
  }

}
