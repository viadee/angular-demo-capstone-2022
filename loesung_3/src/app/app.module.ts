import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';

@NgModule({
  declarations: [
    AppComponent, //
    FruitComponent,
    FruitListComponent,
  ],
  imports: [
    FormsModule, //
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
