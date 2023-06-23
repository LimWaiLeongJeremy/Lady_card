import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Player } from "../../model/player";
import { RegisterServiceService } from 'src/app/service/register-service.service';

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
    const newPlayer ={
      playerName: this.playerForm.value.playerName,
      ladyCard: this.playerForm.value.ladyCard,
      toiletCard: this.playerForm.value.toiletCard,
      madCard: this.playerForm.value.madCard
    };

    this.playerList.push(newPlayer);
    console.log(this.playerList);
  }

  removePlayer(playerName: string) {
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
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
