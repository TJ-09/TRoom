import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-money-bar',
  templateUrl: './money-bar.component.html',
  styleUrls: ['./money-bar.component.scss']
})
export class MoneyBarComponent {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<MoneyBarComponent>,
    private _snackBar: MatSnackBar
  ) { }

  buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  currentMoney = '';
  change = 0.00;
  currentBill = this.data.bill;
  displayMoney = 0;

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    this.clearNumPad();
  }

  pressNumber(numberPressed) {
    this.currentMoney = this.currentMoney + numberPressed;
    this.doDecimal(this.currentMoney);
  }

  doDecimal(num) {
    this.displayMoney = Number((num / 100).toFixed(2));
  }

  submitNumber() {
    if (this.displayMoney > this.currentBill) {

      this.change = this.displayMoney - this.currentBill;

    } else {
      this.showError()
      //do error thing for feedback - perhaps a toaster
    }
  }

  clearNumPad() {
    this.currentMoney = '';
    this.displayMoney = 0;
    this.change = 0.00;
  }

  clearButton() {
    this.clearNumPad();
  }

  closeBottomSheet() {
    this._bottomSheetRef.dismiss();
    this.clearNumPad();
  }

  showError() {
    this._snackBar.openFromComponent(ErrorBarComponent, {
      duration: 3 * 1000,
    });
  }

}

// this is for the error handeling feedback

@Component({
  selector: 'error-bar',
  templateUrl: 'error-template.html',
  styles: [],
})
export class ErrorBarComponent { }