import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelMapComponent } from './cancel-map.component';

describe('CancelMapComponent', () => {
  let component: CancelMapComponent;
  let fixture: ComponentFixture<CancelMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
