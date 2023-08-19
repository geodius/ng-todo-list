import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListData } from '../services/listdata.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit, OnDestroy{
  lists:Array<string> = [];
  newName:string = '';
  
  constructor(public listdata: ListData){}

  ngOnInit(): void {
    this.lists = this.listdata.lists;
  }
  
  ngOnDestroy(): void {
    this.listdata.lists = this.lists;
  }

  createList(){
    this.lists.push(this.newName);
    this.newName = '';
  }
}
