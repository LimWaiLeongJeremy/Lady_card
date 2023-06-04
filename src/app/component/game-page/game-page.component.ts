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

  constructor(private deckSrv: DeckService) {}

  drawCard() {
    this.newGame()
    const randomCardIndex = Math.random() * this.playingDeck.length;
    const drawedCard = this.playingDeck[randomCardIndex];
    delete this.playingDeck[randomCardIndex];
    console.log(drawedCard);
    // return drawedCard;

    }

  newGame() {
    throw new Error('Method not implemented.');
  }

}
