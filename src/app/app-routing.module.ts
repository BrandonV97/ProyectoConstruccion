import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './paginas/productos/productos.component';
import { CrudClientesComponent } from './paginas/crud-clientes/crud-clientes.component';
import { CrudProductosComponent } from './paginas/crud-productos/crud-productos.component';
import { CrudRolesComponent } from './paginas/crud-roles/crud-roles.component';
import { CrudPorductosCategoriaComponent } from './paginas/crud-porductos-categoria/crud-porductos-categoria.component';
import { CurdoCarritoComponent } from './paginas/curdo-carrito/curdo-carrito.component';
import { PizzaComponent } from './paginas/pizza/pizza.component';

const routes:Routes=[
    {
      path: '' ,
      component:ProductosComponent,
      pathMatch: 'full'
    },
    {
      path:'clientes',
      component: CrudClientesComponent
    },
    {
        path: 'productos',
        component:CrudProductosComponent
    },
    {
        path:'roles',
        component:CrudRolesComponent
    },
    {
        path:'carrito',
        component:CurdoCarritoComponent
    },
    {
        path:'productos-categoria',
        component:CrudPorductosCategoriaComponent
    },
    {
      path:'pizza',
      component: PizzaComponent

    },
    {
        path: '**',
        redirectTo: ''
    }


  ];

  @NgModule({
      imports:[
        RouterModule.forRoot(routes)
      ],
      exports:[
        RouterModule
      ]
  })

  export class AppRoutingModule {}