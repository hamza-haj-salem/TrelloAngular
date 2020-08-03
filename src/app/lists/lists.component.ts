import { Component, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../models/list.model';
import { Card } from '../models/card.model';
import { title } from 'process';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  
  showForm : boolean ;
  showFormCard: boolean ;
  @Input() childAllLists: List[];
  @Output() clickSender = new EventEmitter();
  //@Output() addEvt = new EventEmitter();
 
  addCards(theCard: Card,currentList:List){
    console.log(currentList.title,theCard);
    currentList.cards.push(theCard);
    
       
  }


  toggleAjtDisplay(){
    this.showForm = !this.showForm; 

  }

  

 

/*  handleAdd(formInfo:any) */  
newList(listToCreate: any)  /*  listeToCreate=formInfo */  {
    
  
      const tempItem :List = {
        title : listToCreate.listeTitle,
        cards:[new Card (listToCreate.cards)],
      };
      this.clickSender.emit(tempItem) ;
      this.showForm = !this.showForm ;
     
  
    
    
  }

 

  constructor() {
    this.showForm = true
   
   

   }

  
}
