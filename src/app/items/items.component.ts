import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListData } from '../services/listdata.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  listName:string = "";
  newTask:string = "";
  errorDisplay:boolean = false;

  constructor(private route: ActivatedRoute, public listdata: ListData) {}

  ngOnInit(): void{
    this.listName = this.route.snapshot.paramMap.get('name') || "";
  }

  createTask() {
    this.errorDisplay = (!this.listdata.addToItems(new Item(this.listName,this.newTask.trim(),false)));
    this.newTask = '';
  }
}

export class Item{
  list: string = '';
  description: string = '';
  complete: boolean = false;
  
  constructor(list:string, description:string, complete:boolean){
    this.list = list;
    this.description = description;
    this.complete = complete;
  }
}
