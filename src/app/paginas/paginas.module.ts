import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudProductosComponent } from './crud-productos/crud-productos.component';
import { CrudClientesComponent } from './crud-clientes/crud-clientes.component';
import { CurdoCarritoComponent } from './curdo-carrito/curdo-carrito.component';
import { CrudRolesComponent } from './crud-roles/crud-roles.component';
import { CrudPorductosCategoriaComponent } from './crud-porductos-categoria/crud-porductos-categoria.component';
import { PizzaComponent } from './pizza/pizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudSeccionComponent } from './crud-seccion/crud-seccion.component';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';
import { DetalleVentasComponent } from './detalle-ventas/detalle-ventas.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    CrudProductosComponent,
    CrudClientesComponent,
    CurdoCarritoComponent,
    CrudRolesComponent,
    CrudPorductosCategoriaComponent,
    PizzaComponent,
    CrudSeccionComponent,
    ListaCarritoComponent,
    DetalleVentasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
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
