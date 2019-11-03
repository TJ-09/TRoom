import { Component, TemplateRef } from '@angular/core';
import { IndoorProducts, HatchProducts, HatchTea, IndoorTea, HatchTeaType, IndoorTeaType } from './products';
import { MatDialog, MatDialogConfig } from "@angular/material";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) { }

  items = [];
  itemsCost = [];


  //star off inside so set the products accordingly
  products = IndoorProducts;
  indoorteas = IndoorTea;
  teas = IndoorTea
  teaTypes = IndoorTeaType;
  menu = 'Inside Menu';
  toggle = true;

  // set the bill to zero
  currentBill = 0;


  addToCart(product) {
    this.items.push([product.itemName, product.cost]);
    console.log(this.items);
    this.currentBill = this.currentBill + product.cost;
    this.dialog.closeAll();
  }

  toggleItems() {
    this.toggle = !this.toggle; //swtich between the two
    this.clearCart();
    console.log(this.toggle);
    if (this.toggle) {
      // if the toggle is true then we are inside so display the indoor menu and teas
      this.menu = 'Indoor Menu'
      this.products = IndoorProducts;
      this.teas = IndoorTea
      this.teaTypes = IndoorTeaType;
    }
    else {
      // otherwise we must be at the hatch so show the hatch menu
      this.menu = 'Hatch Menu'
      this.products = HatchProducts;
      this.teas = HatchTea
      this.teaTypes = HatchTeaType;
    }
  }

  addTea(templateRef: TemplateRef<any>) {
    const dialogConfig = new MatDialogConfig();
    // if(this.toggle)
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //  dialogConfig.width = '500px';
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


