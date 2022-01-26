import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudProductosComponent } from './crud-productos/crud-productos.component';
import { CrudClientesComponent } from './crud-clientes/crud-clientes.component';
import { CurdoCarritoComponent } from './curdo-carrito/curdo-carrito.component';
import { CrudRolesComponent } from './crud-roles/crud-roles.component';
import { CrudPorductosCategoriaComponent } from './crud-porductos-categoria/crud-porductos-categoria.component';
import { PizzaComponent } from './pizza/pizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudProductosComponent,
    CrudClientesComponent,
    CurdoCarritoComponent,
    CrudRolesComponent,
    CrudPorductosCategoriaComponent,
    PizzaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CrudProductosComponent,
    CrudClientesComponent,
    CurdoCarritoComponent,
    CrudRolesComponent,
    CrudPorductosCategoriaComponent
  ]
})
export class PaginasModule { }
