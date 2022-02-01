import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ModuleProductos } from '../interfaces/model.productos';

@Component({
  selector: 'app-crud-productos',
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css'],
})
export class CrudProductosComponent implements OnInit {
  public form!: FormGroup;
//crud-productos.component.ts
  public informacionProductos = {
    product_id: -1,
    product_title: '',
    product_description: '',
    product_cost: 0,
    product_price: 0,
    product_stock: 0,
    product_type: '',
    product_image: '',
    product_state: true,
  };

  constructor(
    private productoService: ProductosService,
    private formbuilder: FormBuilder
  ) {}

  productos: ModuleProductos[] = [];

  ngOnInit(): void {
    this.cargarProducto();
    this.form = this.formbuilder.group({
      txtTitle: [''],
      txtDescription: [''],
      txtCost: [0],
      txtPrice: [0],
      txtStock: [0],
      txtType: [''],
      txtImage: ['']
    });
    var swiper = new Swiper(".home-swiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });

    var swiper = new Swiper(".new-swiper", {
      slidesPerView: 3,
      spaceBetween: 5,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  public cargarProducto() {
    this.productoService.getProductos().subscribe(
      (producto: any) => {
        this.productos = producto;
        console.log(this.productos);
      },
      (error) => console.log(error)
    );
  }

  public crearProducto() {
    this.productoService
      .createProductos({
        product_title: this.form.value.txtTitle,
        product_description: this.form.value.txtDescription,
        product_cost: this.form.value.txtCost,
        product_price: this.form.value.txtPrice,
        product_stock: this.form.value.txtStock,
        product_type: this.form.value.txtType,
        product_image: this.form.value.txtImage
      })
      .subscribe((res) => {
        console.log('Producto Creado Exitosamente');
        this.cargarProducto();
      });
  }
 
  public eliminarProducto(product_id: any) {
    console.log(product_id);
    this.productoService
      .deleteProducto({
        product_id: product_id,
        product_state: false,
      })
      .subscribe((res) => {
        console.log('Producto Eliminad0');
        this.cargarProducto();
      });
  }

  public actualizarProducto(product_id: any) {
    this.productoService.updateProducto({
      product_id: product_id,
      product_title: this.form.value.txtTitle,
      product_description: this.form.value.txtDescription,
      product_cost: this.form.value.txtCost,
      product_price: this.form.value.txtPrice,
      product_stock: this.form.value.txtStock,
      product_type: this.form.value.txtType,
      product_image: this.form.value.txtImage
    }).subscribe(res => {
      console.log('Producto actualizado');
      this.cargarProducto()
    })
  }

  public infoUpdateProducto(
    product_id: any,
    product_title: any,
    product_description: any,
    product_cost:any,
    product_price:any,
    product_stock:any,
    product_type: any,
    product_image: any
  ) {
    this.informacionProductos.product_id = product_id;
    this.informacionProductos.product_title = product_title;
    this.informacionProductos.product_description = product_description;
    this.informacionProductos.product_cost = product_cost;
    this.informacionProductos.product_price = product_price;
    this.informacionProductos.product_stock = product_stock;
    this.informacionProductos.product_type = product_type;
    this.informacionProductos.product_image = product_image;
  }

  public activeModal() {
    var modal = document.getElementById('myModal');
    modal?.classList.add('modal_show');
  }

  public inactiveModal() {
    var modal = document.getElementById('myModal');
    modal?.classList.remove('modal_show');
  }
}
