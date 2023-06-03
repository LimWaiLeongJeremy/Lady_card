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
    const randomCard = this.playingDeck[Math.random() * this.playingDeck.length];

    }

  newGame() {
    throw new Error('Method not implemented.');
  }

}
