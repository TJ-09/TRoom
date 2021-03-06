import { Component, TemplateRef } from "@angular/core";
import {
  IndoorProducts,
  HatchProducts,
  HatchTea,
  IndoorTea,
  HatchTeaType,
  IndoorTeaType,
} from "./products";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MoneyBarComponent } from "./money-bar/money-bar.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private dialog: MatDialog,
    private _bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar
  ) {}

  items = [];
  itemsCost = [];

  //start off hatch so set the products accordingly
  indoorteas = IndoorTea;
  products = HatchProducts;
  teas = HatchTea;
  teaTypes = HatchTeaType;
  menu = "Hatch Menu";
  toggle = false;

  // set the bill to zero
  currentBill = 0;

  getIndex(product) {
    var returnIndex;
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];
      if (product.itemName === element[0]) {
        returnIndex = index;
        return returnIndex;
      }
    }
  }

  addToCart(product) {
    var indexOf = this.getIndex(product);

    if (indexOf >= 0) {
      // if the item is in the array already then add one to the amount
      this.items[indexOf][2] += 1;
      this.currentBill = this.currentBill + product.cost;
    } else {
      // if it does not yet exist then add it
      this.items.push([product.itemName, product.cost, product.amount]);
      this.currentBill = this.currentBill + product.cost;
    }
    // this.dialog.closeAll();
  }

  toggleItems() {
    this.toggle = !this.toggle; //swtich between the two
    this.clearCart();

    if (this.toggle) {
      // if the toggle is true then we are inside so display the indoor menu and teas
      this.menu = "Indoor Menu";
      this.products = IndoorProducts;
      this.teas = IndoorTea;
      this.teaTypes = IndoorTeaType;
    } else {
      // otherwise we must be at the hatch so show the hatch menu
      this.menu = "Hatch Menu";
      this.products = HatchProducts;
      this.teas = HatchTea;
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
    var indexOf = this.getIndex({ itemName: product[0] });
    if (indexOf >= 0) {
      if (this.items[indexOf][2] === 1) {
        // if there is only one left in the array then splice from array
        this.currentBill = this.currentBill - product[1];
        this.items.splice(indexOf, 1);
      } else {
        // if there is more than one item in the array then remove one to the amount
        this.currentBill = this.currentBill - product[1];
        this.items[indexOf][2] -= 1;
      }
    }
  }

  clearCart() {
    this.items = [];
    this.currentBill = 0;
    this.snackBar.open("Order cleared", "", { duration: 1500 });
    return this.items;
  }

  openMoney(): void {
    this._bottomSheet.open(MoneyBarComponent, {
      data: { bill: this.currentBill },
    });
  }
}
