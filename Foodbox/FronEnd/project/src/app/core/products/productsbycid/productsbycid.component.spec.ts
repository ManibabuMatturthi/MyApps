import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsbycidComponent } from './productsbycid.component';

describe('ProductsbycidComponent', () => {
  let component: ProductsbycidComponent;
  let fixture: ComponentFixture<ProductsbycidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsbycidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsbycidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
