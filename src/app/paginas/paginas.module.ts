import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { CrudProductosComponent } from './crud-productos/crud-productos.component';
import { CrudClientesComponent } from './crud-clientes/crud-clientes.component';
import { CurdoCarritoComponent } from './curdo-carrito/curdo-carrito.component';
import { CrudRolesComponent } from './crud-roles/crud-roles.component';
import { CrudPorductosCategoriaComponent } from './crud-porductos-categoria/crud-porductos-categoria.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudProductosComponent,
    CrudClientesComponent,
    CurdoCarritoComponent,
    CrudRolesComponent,
    CrudPorductosCategoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
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
