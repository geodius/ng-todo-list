import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListData } from '../services/listdata.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy {
  listName:string = "";
  items:Array<Item> = [];
  newTask:string = '';
  errorDisplay:boolean = false;

  constructor(private route: ActivatedRoute, public listdata: ListData) {}

  ngOnInit(): void{
    this.listName = this.route.snapshot.paramMap.get('name') || '';
    this.items = this.listdata.items;
  }

  ngOnDestroy() {
    this.listdata.items = this.items;
  }

  createTask() {
    this.errorDisplay = (this.items.findIndex(x => x.description  == this.newTask) != -1);
    if (!this.errorDisplay) this.items.push(new Item(this.listName,this.newTask,false));
    this.newTask = '';
  }

}

export class Item{
  constructor(list:string, description:string, complete:boolean){
    this.list = list;
    this.description = description;
    this.complete = complete;
  }
  list: string = '';
  description: string = '';
  complete: boolean = false;
}
