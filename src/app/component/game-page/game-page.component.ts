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

  constructor(
    private deckSrv: DeckService,
    ) {}

  ngOnInit(): void {
    const player = sessionStorage.getItem("players");
    const newPlayer: Player[] = JSON.parse(player || '[]');
    this.playerList = newPlayer;
    this.newGame()
  }

  drawCard() {
    if (this.playingDeck.length != 0) {
      const randomCardIndex = Math.floor(Math.random() * this.playingDeck.length);
      const drawedCard = this.playingDeck[randomCardIndex];
      this.currentCard = drawedCard;
      this.playingDeck.splice(randomCardIndex, 1);
      this.deckQuantity = this.playingDeck.length;
      console.log(drawedCard);
      console.log(this.deckQuantity, ' cards till deck empty');
      // return drawedCard;
    } else {
      console.log("Deck is empty.")
    }
  }


  newGame() {
    this.playingDeck = this.deckSrv.getNewDeck();

  }

}
