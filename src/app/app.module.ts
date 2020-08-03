import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ListsComponent } from './lists/lists.component';
import { DescriptionComponent } from './description/description.component';
import { AddComponent } from './add/add.component';

import { FormsModule} from '@angular/forms'
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ListsComponent,
    DescriptionComponent,
    AddComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
