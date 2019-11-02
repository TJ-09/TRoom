import { Component, TemplateRef } from '@angular/core';
import { IndoorProducts, HatchProducts, HatchTea, IndoorTea, TeaType, IndoorTeaType } from './products';
import { MatDialog, MatDialogConfig } from "@angular/material";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) { }

  title = 'TRoom';
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
  items = [];
  itemsCost = [];
  products = IndoorProducts;
  indoorteas = IndoorTea;
  teas = IndoorTea
  teaTypes = TeaType;
  currentBill = 0;
  menu = 'Inside Menu';
  toggle = true;

  addToCart(product) {
    this.items.push([product.itemName, product.cost]);
    this.currentBill = this.currentBill + product.cost;
    this.dialog.closeAll();
  }

  toggleItems() {
    this.toggle = !this.toggle;
    this.clearCart();
    console.log(this.toggle);
    if (this.toggle) {
      this.menu = 'Indoor Menu'
      this.products = IndoorProducts;
      this.teas = IndoorTea
      //  this.teaTypes = IndoorTeaType;
    }
    else {
      this.menu = 'Hatch Menu'
      this.products = HatchProducts;
      this.teas = HatchTea
      //  this.teaTypes = TeaType;
    }
  }

  addTea(templateRef: TemplateRef<any>) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = '500px';
    this.dialog.open(templateRef, dialogConfig);
  }

  deleteItem(product) {

    this.currentBill = this.currentBill - product[1];
    var index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }


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


