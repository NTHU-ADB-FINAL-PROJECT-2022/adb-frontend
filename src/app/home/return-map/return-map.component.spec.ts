import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnMapComponent } from './return-map.component';

describe('ReturnMapComponent', () => {
  let component: ReturnMapComponent;
  let fixture: ComponentFixture<ReturnMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
