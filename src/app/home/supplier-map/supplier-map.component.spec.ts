import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleMapComponent } from './supplier-map.component';

describe('SaleMapComponent', () => {
  let component: SaleMapComponent;
  let fixture: ComponentFixture<SaleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
