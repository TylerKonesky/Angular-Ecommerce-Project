import { Injectable } from "@angular/core";
import { Product } from './product.model';
import { Observable, from } from "rxjs";

@Injectable()
export class StaticdataSource{
    private products: Product [] = [
        new Product(1, "Some Fancy Shoes", "Category 1", "Tennis Shoes", 99),
        new Product(2, "Some Fancy Leather", "Category 1", "Leather Chaps", 3399),
        new Product(3, "Some Fancy Underwear", "Category 1", "Plastic Undies", 44),
        new Product(4, "Some Fancy Shirts", "Category 1", "Rubber Cloth", 26),
        new Product(5, "Some Fancy Pants", "Category 1", "Paper Pants", 105),
        new Product(6, "Some Fancy Hooves", "Category 2", "Coal Hooves", 18),
        new Product(7, "Some Fancy Sheep", "Category 2", "Hairless Sheep", 27),
        new Product(8, "Some Fancy Toothbrushes", "Category 2", "Bristleless Brush", 45),
        new Product(9, "Some Fancy Lemonade", "Category 2", "Waterless Lemonade", 99),
        new Product(10, "Some Fancy Ice", "Category 2", "Waterless Ice", 88),
        new Product(10, "Some Fancy Ice", "Category 3", "Waterless Ice", 88),
    ];

    getProducts() : Observable<Product[]>{
        return from([this.products])
    }
}