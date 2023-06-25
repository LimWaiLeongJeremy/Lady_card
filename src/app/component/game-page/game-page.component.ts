import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { Player } from 'src/app/model/player';
import { DeckService } from 'src/app/service/deck.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit{

  playingDeck!: Card[];
  currentCard!: Card;
  deckQuantity!: number;
  playerList: Player[] = [];
  turnCounter: number = 0;


  constructor(
    private deckSrv: DeckService,
    ) {}

  ngOnInit(): void {
    const player = sessionStorage.getItem("players");
    const newPlayer: Player[] = JSON.parse(player || '[]');
    this.playerList = newPlayer;
    this.newGame()
  }

  refresh(): void {
    window.location.reload();
    this.playerList.forEach((player) => {
      player.ladyCard = false;
      player.toiletCard = false;
      player.madCard = false;
    })
  }

  drawCard() {
    if (this.playingDeck.length != 0) {
      this.nextTurn();
      this.randomCard();
      this.assignFlag(this.currentCard.characters);
      // return drawedCard;
    } else {
      console.log("Deck is empty.");
    }
  }


  private newGame() {
    this.playingDeck = this.deckSrv.getNewDeck();

  }

  private randomCard() {
    const randomCardIndex = Math.floor(Math.random() * this.playingDeck.length);
    const drawedCard = this.playingDeck[randomCardIndex];
    this.currentCard = drawedCard;
    this.playingDeck.splice(randomCardIndex, 1);
    this.deckQuantity = this.playingDeck.length;
    console.log(this.deckQuantity, ' cards till deck empty');
  }

  private nextTurn() {
    if (this.turnCounter < this.playerList.length) {
      console.log(this.turnCounter);
      const currentPlayer = this.playerList[this.turnCounter];
      console.log('Current player', currentPlayer);
      this.turnCounter += 1;
      console.log(this.turnCounter);
    } else {
      this.turnCounter = 0;
      console.log('Turn counter reset to 0');
      console.log(this.turnCounter);
      const currentPlayer = this.playerList[this.turnCounter];
      console.log('Current player', currentPlayer);
      this.turnCounter += 1;
      console.log(this.turnCounter);
    }
  }

  private assignFlag(cardNumber: string){
    switch (cardNumber) {
      case '2':
        this.playerList[this.turnCounter - 1].ladyCard = true;
        break;
      case '8':
        this.playerList[this.turnCounter - 1].toiletCard = true;
        break;
      case '10':
        this.playerList[this.turnCounter - 1].madCard = true;
        break;
    }
  }
}
