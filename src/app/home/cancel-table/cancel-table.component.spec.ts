import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTableComponent } from './cancel-table.component';

describe('PreSaleTableComponent', () => {
  let component: CancelTableComponent;
  let fixture: ComponentFixture<CancelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
