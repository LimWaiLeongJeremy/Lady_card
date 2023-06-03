import { Component } from '@angular/core';
import { Card } from "../../model/card";

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {

  deck: Card[] = [
    // Spade house
    {
      characters: "A",
      house: "Spade",
      effect: "Cheers to yourself",
      description: "Only you drink.",
      image: "A Spade"
    },
    {
      characters: "2",
      house: "Spade",
      effect: "Lady card",
      description: "When anyone in the game drink you need to cheers with them. \n*You'll hold on to this card until someone draws another 2 or the game finish.",
      image: "2 Spade"
    },
    {
      characters: "3",
      house: "Spade",
      effect: "Pick someone to drink",
      description: "Pick a favorite person to drink.",
      image: "3 Spade"
    },
    {
      characters: "4",
      house: "Spade",
      effect: "Cheers to someone",
      description: "Pink a favorite person to drink with you.",
      image: "4 Spade"
    },
    {
      characters: "5",
      house: "Spade",
      effect: "Freeze universe",
      description: "Everyone stop moving, the first to move, please drink up.",
      image: "5 Spade"
    },
    {
      characters: "6",
      house: "Spade",
      effect: "Redraw",
      description: "You are the lucky one.\nPlease redraw a card.",
      image: "6 Spade"
    },
    {
      characters: "7",
      house: "Spade",
      effect: "Stand up universe",
      description: "Everyone Stand up immediately!!!\nLast to stand up, weak.. Please drink up. ",
      image: "7 Spade"
    },
    {
      characters: "8",
      house: "Spade",
      effect: "Toilet pass",
      description: "Use to exchange for a chance to go toilet.",
      image: "8 Spade"
    },
    {
      characters: "9",
      house: "Spade",
      effect: "Question card",
      description: "Please ask a question, everyone have 3 seconds to answer.\nThe one who can't give an answer or not a acceptable answer please drink up.",
      image: "9 Spade"
    },
    {
      characters: "10",
      house: "Spade",
      effect: "Lunatic card",
      description: "You just went mad, nobody can have any interaction with you.\nThe one who interact with you must drink up.",
      image: "10 Spade"
    },
    {
      characters: "J",
      house: "Spade",
      effect: "Previous player card",
      description: "Pervious player please drink up.",
      image: "J Spade"
    },
    {
      characters: "Q",
      house: "Spade",
      effect: "Next player card",
      description: "Next player please drink up",
      image: "Q Spade"
    },
    {
      characters: "K",
      house: "Spade",
      effect: "Staking card",
      description: "K will be stack up, the player who draws the last K will drink up.",
      image: "K Spade"
    }
  ]
}
