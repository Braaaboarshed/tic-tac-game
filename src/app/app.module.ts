import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';        //import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
