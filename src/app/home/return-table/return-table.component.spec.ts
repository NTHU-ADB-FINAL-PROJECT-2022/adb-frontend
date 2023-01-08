import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnTableComponent } from './return-table.component';

describe('ReturnTableComponent', () => {
  let component: ReturnTableComponent;
  let fixture: ComponentFixture<ReturnTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
