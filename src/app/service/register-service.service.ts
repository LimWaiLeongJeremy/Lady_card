import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  passPlayerList: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  // private paramSource = new BehaviorSubject(null);
  // sharedParam = this.paramSource.asObservable();

  constructor() { }

  storePlayerList(playerList: any) {
    this.passPlayerList.next(playerList)
  }

  getPlayerList() {
    return this.passPlayerList
  }
}
