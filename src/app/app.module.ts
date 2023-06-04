import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GamePageComponent } from './component/game-page/game-page.component';
import { DeckService } from "./service/deck.service";
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    title: 'Lady card',
    component: RegisterComponent
  },
  {
    path: 'game',
    title: 'Lady card',
    component: GamePageComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    DeckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
