import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { Player } from 'src/app/model/player';
import { DeckService } from 'src/app/service/deck.service';
import { RegisterServiceService } from 'src/app/service/register-service.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit{

  playingDeck!: Card[];
  deckQuantity!: number;
  playerList: any;

  constructor(
    private deckSrv: DeckService,
    private regSvc: RegisterServiceService
    ) {}

  ngOnInit(): void {
    this.regSvc.passPlayerList.subscribe((passPlayerList) =>{
      this.playerList = passPlayerList;
      console.log(JSON.stringify(this.playerList));
    })
  }

  drawCard() {
    this.newGame()
    const randomCardIndex = Math.floor(Math.random() * this.playingDeck.length);
    const drawedCard = this.playingDeck[randomCardIndex];
    this.playingDeck.splice(randomCardIndex, 1);
    this.deckQuantity = this.playingDeck.length;
    console.log(drawedCard);
    console.log(this.deckQuantity);
    // return drawedCard;

    }


  newGame() {
    this.playingDeck = this.deckSrv.getNewDeck();

  }

}
