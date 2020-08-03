import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  showForm : boolean;
  @Output() addEvt = new EventEmitter();
  @Output() clickSender = new EventEmitter();

  newList(listToCreate: any)  /*  listeToCreate=formInfo */  {
    //this.clickSender.emit(listToCreate);
    
      const tempItem: object = {
        title: listToCreate.listeTitle,
      //  listeDate: listToCreate.listeDate + ' ' + listToCreate.listeTime ,
        cards: listToCreate.cards,
      };
      this.clickSender.emit(tempItem) ;
      this.showForm = !this.showForm ;
     
  
    
    
  }


  toggleAjtDisplay(){
    this.showForm = !this.showForm 

  }

  constructor() {
    this.showForm = true

   }

  ngOnInit() {
  }

}
