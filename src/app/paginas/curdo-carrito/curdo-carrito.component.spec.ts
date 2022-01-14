import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdoCarritoComponent } from './curdo-carrito.component';

describe('CurdoCarritoComponent', () => {
  let component: CurdoCarritoComponent;
  let fixture: ComponentFixture<CurdoCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdoCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdoCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
