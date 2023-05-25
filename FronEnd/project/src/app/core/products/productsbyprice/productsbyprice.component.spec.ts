import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsbypriceComponent } from './productsbyprice.component';

describe('ProductsbypriceComponent', () => {
  let component: ProductsbypriceComponent;
  let fixture: ComponentFixture<ProductsbypriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsbypriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsbypriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
