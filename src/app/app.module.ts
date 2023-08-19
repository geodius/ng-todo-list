import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ListsComponent } from './lists/lists.component';
import { ListData } from './services/listdata.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ListData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
