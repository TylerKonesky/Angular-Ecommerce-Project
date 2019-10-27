import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Model/product.model';
import { ProductRepository } from 'src/Model/product.repository';
import { Cart } from './cart.model';


@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1; 

  constructor(private repository : ProductRepository, private cart : Cart) { }

  ngOnInit() {
  }

  get products() : Product[] {
    let pageIndex = (this.selectedPage -1) * this.productsPerPage; 
    return this.repository.getProducts(this.selectedCategory)
    .slice(pageIndex, pageIndex + this.productsPerPage)
  }

  get categories() : string[]{
    return this.repository.getCategories();
  }

  changeCategory( newCategory? : string ){
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number){
    this.selectedPage = newPage;
  }

  changePageSize(newSize : number){
    this.productsPerPage = Number(newSize);
    this.changeCategory();
  }

  get pageNumbers() : number[]{
    return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
    .fill(0).map((x, i) => i + 1)
  }

  addProductToCart( Product : Product){
    this.cart.addLine(Product);
  }

}
