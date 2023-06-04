import { Component } from '@angular/core';
import { Card } from 'src/app/model/card';
import { DeckService } from 'src/app/service/deck.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {

  playingDeck!: Card[];
  deckQuantity!: number;

  constructor(private deckSrv: DeckService) {}

  drawCard() {
    this.newGame()
    const randomCardIndex = Math.random() * this.playingDeck.length;
    const drawedCard = this.playingDeck[randomCardIndex];
    delete this.playingDeck[randomCardIndex];
    this.deckQuantity = this.playingDeck.length;
    console.log(drawedCard);
    console.log(this.deckQuantity);
    // return drawedCard;

    }

  newGame() {
    this.playingDeck = this.deckSrv.getNewDeck();

  }

}
