
import {ProductRepository} from "./product.repository";
import { StaticdataSource } from './static.datasource';
import { NgModule } from '@angular/core';
import { Cart } from 'src/app/store/cart.model';



@NgModule({
    providers:[ProductRepository, StaticdataSource, Cart]
})

export class modelModule{
    
}