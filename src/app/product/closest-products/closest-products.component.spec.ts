import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosestProductsComponent } from './closest-products.component';

describe('ClosestProductsComponent', () => {
  let component: ClosestProductsComponent;
  let fixture: ComponentFixture<ClosestProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosestProductsComponent]
    });
    fixture = TestBed.createComponent(ClosestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
