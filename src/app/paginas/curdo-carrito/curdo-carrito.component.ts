import { Component, OnInit } from '@angular/core';
import { ModuleCartCab } from '../interfaces/model.cart_cab';
import { ModuleCartDet } from '../interfaces/module.cart_det';
import { ModuleProductos } from '../interfaces/model.productos';
import { ModuleUsers } from '../interfaces/model.users';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { UserService } from '../../services/users.service';
import { CartCabService } from '../../services/cart-cab.service';
import { CartDetService } from '../../services/cart-det.service';

@Component({
  selector: 'app-curdo-carrito',
  templateUrl: './curdo-carrito.component.html',
  styleUrls: ['./curdo-carrito.component.css']
})
export class CurdoCarritoComponent implements OnInit {


  cartCabs: ModuleCartCab[] = []
  cartDets: ModuleCartDet[] = []
  productos: ModuleProductos[] = []
  usuarios: ModuleUsers[] = []

  public form!: FormGroup

  constructor(
    private productosService: ProductosService,
    private usuarioService: UserService,
    private cartCabService: CartCabService,
    private cartDetService: CartDetService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cargarUsers()
    this.cargarProducto()
    this.cargarCartCabs()
    // params for CartCab
    this.form = this.formBuilder.group({
      usuarioSelected: [],
      txtFecha: [''],
      txtIva: [''],
      txtDescuento: [0],
      txtSubtotal: [0],
      txtTotal: [0],
      txtstate: [true],
      // params for CartDet
      productoSelected: [],
      txtCantidad: [0],
      txtPrecio: [0],
      txtSubtotalProd: []
    })

  }
  // on load metods
  public cargarUsers() {
    this.usuarioService.getUsers().subscribe(
      (user: any) => {
        this.usuarios = user
        console.log(this.usuarios)
      }, (error) => console.log(error)
    )
  }
  public cargarProducto() {
    this.productosService.getProductos().subscribe(
      (producto: any) => {
        this.productos = producto;
        console.log(this.productos);
      },
      (error) => console.log(error)
    );
  }
  public cargarCartCabs() {
    this.cartCabService.getCartCab().subscribe((carCab: any) => {
      this.cartCabs = carCab
      console.log(this.cartCabs);

    })
  }

  // get price product
  precio = 0
  iva = 0
  descuento = 0
  public getPrecioProd(price: any) {
    return this.precio = price
  }

  // Create a listo of products 
  listCartDet: ModuleCartDet[] = []

  public calculoSubtotal: number = 0;
  public calculoTotal: number = 0;
  public calculoIva = 0

  public asignarProductos() {
    this.calculoTotal = 0
    this.calculoIva = 0
    this.calculoSubtotal = 0
    let det: ModuleCartDet = {
      product_id: this.form.value.productoSelected,
      cart_det_amount: this.form.value.txtCantidad,
      cart_det_price: this.precio,
      cart_det_subtotal: (this.precio * this.form.value.txtCantidad)
    }
    console.log(det);
    this.listCartDet.push(det)
    this.listCartDet.forEach(element => {
      this.calculoSubtotal = this.calculoSubtotal + (element.cart_det_subtotal / 1.12)
      this.calculoTotal += element.cart_det_subtotal
      this.calculoIva = this.calculoTotal - this.calculoSubtotal

    });



  }
  public createCartCab() {
    this.cartCabService.CreateCartCab({
      user_id: this.form.value.usuarioSelected,
      cart_cab_date: this.form.value.txtFecha,
      cart_cab_iva: this.calculoIva,
      cart_cab_discount: this.form.value.txtDescuento,
      cart_cab_subtotal: this.calculoSubtotal,
      cart_cab_total: this.calculoTotal,
      cart_cab_state: this.form.value.txtstate
    }).subscribe(res => {
      console.log('Carrito Creado');
    })
  }

  public createCartDet(detalle: ModuleCartDet, idCartCab: number) {
    this.cartDetService.CreateCartDet({
      cart_cab_id: idCartCab,
      product_id: detalle.product_id,
      cart_det_amount: detalle.cart_det_amount,
      cart_det_price: detalle.cart_det_price,
      cart_det_subtotal: detalle.cart_det_subtotal
    }).subscribe(res => {
      console.log('Detalle Creado');

    })
  }

  public getIdFacturaUlt(listaFactCab: ModuleCartCab[]) {
    let idFact: number
    listaFactCab.forEach(element => {
      idFact = element.cart_cab_id
    });
    console.log('id de Factura Cabecera: ' + idFact!);

    return idFact!
  }

  public GuardarCarrito() {
    this.createCartCab()
    this.cargarCartCabs()
    let idCartCab = this.getIdFacturaUlt(this.cartCabs)
    console.log(idCartCab);
    console.log(this.listCartDet.length);
    
    this.listCartDet.forEach(element => {
      console.log('agredando productoss');
      
      this.createCartDet(element, idCartCab+1)
    });
    this.listCartDet = []
    // this.form.clearAsyncValidators()

  }

  public getNameProduct(id: any) {
    let nombre = this.productos.find(item => {
      return item.product_id == id
    })
    return nombre?.product_title
  }

  public getImageProduct(id: any) {
    let nombre = this.productos.find(item => {
      return item.product_id == id
    })
    return nombre?.product_image
  }


  public deleteProduct(id: any) {
    this.listCartDet.splice(id, 1)
    this.calculoTotal = 0
    this.calculoIva = 0
    this.calculoSubtotal = 0
    this.listCartDet.forEach(element => {
      this.calculoSubtotal = this.calculoSubtotal + (element.cart_det_subtotal / 1.12)
      this.calculoTotal += element.cart_det_subtotal
      this.calculoIva = this.calculoTotal - this.calculoSubtotal

    });
  }














}
