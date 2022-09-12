import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPopupComponent } from './product-detail-popup.component';

describe('ProductDetailPopupComponent', () => {
  let component: ProductDetailPopupComponent;
  let fixture: ComponentFixture<ProductDetailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
