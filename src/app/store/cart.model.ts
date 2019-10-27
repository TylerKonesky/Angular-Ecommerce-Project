import { Injectable } from "@angular/core";
import { Product } from 'src/Model/product.model';

@Injectable()
export class Cart {
    public Lines : CartLine[] = [];
    public itemcount : number = 0;
    public cartPrice : number = 0;
}


export class CartLine {
    
    
    constructor( public product : Product, public quantity : number){
        

    }
    

    get lineTotal(){
        return this.quantity * this.product.price;
    }

    addLine ( product : Product, quantity : number = 1){
        
        let line = this.Lines.find(line => line.product.id == product.id)
        if(line != undefined){
            line.quantity += quantity; 
        }
        else{
            this.Lines.push(new CartLine(product, quantity))
        }
        this.recalculate();
    }

    updateQuantity(product : Product, quantity : number){
        
        let line = this.Lines.find(line => line.product.id == product.id);
        if(line != undefined){
            line.quantity = quantity; 
        }
        this.recalculate();
    }

    removeLine(id: number){
        let index = this.Lines.findIndex(line => line.product.id == id);
        this.Lines.splice(index);
        this.recalculate();
    }

    clear(){
        this.Lines = [];
    }

    private recalculate(){
        this.itemcount = 0; 
        this.cartPrice = 0; 
        this.Lines.forEach(l => {
            this.itemcount += l.quantity;
            this.cartPrice += (l.quantity * l.product.price)
        })
    }
}

