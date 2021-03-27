import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoneyBarComponent } from './money-bar.component';

describe('MoneyBarComponent', () => {
  let component: MoneyBarComponent;
  let fixture: ComponentFixture<MoneyBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
