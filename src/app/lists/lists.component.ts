import { Component } from '@angular/core';
import { ListData } from '../services/listdata.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  newName:string = '';
  errorDisplay = false;

  constructor(public listdata: ListData){}

  createList(){
    this.errorDisplay = (!this.listdata.addToList(this.newName.trim()));
    this.newName = '';
  }
}
