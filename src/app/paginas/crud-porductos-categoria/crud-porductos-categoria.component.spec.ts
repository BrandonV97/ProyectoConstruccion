import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPorductosCategoriaComponent } from './crud-porductos-categoria.component';

describe('CrudPorductosCategoriaComponent', () => {
  let component: CrudPorductosCategoriaComponent;
  let fixture: ComponentFixture<CrudPorductosCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPorductosCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPorductosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
