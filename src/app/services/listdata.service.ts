import { Item } from "../items/items.component";

export class ListData{
    private _lists:Array<string> = [];
    private _items:Array<Item> = [];

    public get lists() {return this._lists};
    public get items() {return this._items};

    public addToList(list:string){
        if (this._lists.indexOf(list) == -1){
            this._lists.push(list);
            return true;
        }
        return false;
    }

    public addToItems(item:Item){
        if (this._items.findIndex(x => x.description == item.description 
                                    && x.list == item.list) == -1){
            this._items.push(item);
            return true;
        }
        return false;
    }
}