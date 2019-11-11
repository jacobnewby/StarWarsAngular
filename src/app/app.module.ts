import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleDetailComponent } from './component/people/people-detail/people-detail.component';
import { PeopleSearchComponent } from './components/people/people-search/people-search.component';
import { FilmsSearchComponent } from './components/films/films-search/films-search.component';
import { FilmsDetailComponent } from './components/films/films-detail/films-detail.component';
import { StarshipsSearchComponent } from './components/starships/starships-search/starships-search.component';
import { StarshipsDetailComponent } from './components/starships/starships-detail/starships-detail.component';
import { PeopleComponent } from './components/people/people/people.component';
import { FilmsComponent } from './components/films/films/films.component';
import { StarshipsComponent } from './components/starships/starships/starships.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleDetailComponent,
    PeopleSearchComponent,
    FilmsSearchComponent,
    FilmsDetailComponent,
    StarshipsSearchComponent,
    StarshipsDetailComponent,
    PeopleComponent,
    FilmsComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
