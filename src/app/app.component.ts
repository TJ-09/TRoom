import { Component } from '@angular/core';
import { Products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TRoom';

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
  items = [];
  itemsCost = [];
  products = Products;
  currentBill = 0;

  addToCart(product) {
    this.items.push([product.itemName, product.cost]);
    this.currentBill = this.currentBill + product.cost;
  }

  // getItems() {
  //   return this.items;
  // }

  calculateBill() {
    this.items.forEach(element => {
      this.currentBill = this.currentBill + element[1];
    });
  }

  deleteItem(product) {
    console.log(product);
    this.currentBill = this.currentBill - product[1];
    this.items.splice(product, 1);

  }

  clearCart() {
    this.items = [];
    this.currentBill = 0;
    return this.items;
  }

  testMe() {
    console.log('testing');
  }
}


