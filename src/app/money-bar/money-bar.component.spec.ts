import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyBarComponent } from './money-bar.component';

describe('MoneyBarComponent', () => {
  let component: MoneyBarComponent;
  let fixture: ComponentFixture<MoneyBarComponent>;

  beforeEach(async(() => {
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
