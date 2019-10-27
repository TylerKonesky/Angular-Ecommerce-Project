import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { FormsModule } from "@angular/forms";
import { modelModule } from 'src/Model/Model.model';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';

@NgModule({
    imports: [
        modelModule,
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        StoreComponent, CartSummaryComponent
    ],
    exports: [
        StoreComponent
    ]
  })
  export class StoreModule { }
