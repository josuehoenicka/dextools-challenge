import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchProductsComponent } from './watch-products.component';

describe('WatchProductsComponent', () => {
  let component: WatchProductsComponent;
  let fixture: ComponentFixture<WatchProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchProductsComponent]
    });
    fixture = TestBed.createComponent(WatchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
