import { Component, OnInit } from '@angular/core';
import { ModuleCartDet } from '../interfaces/module.cart_det';
import { ModuleProductos } from '../interfaces/model.productos';
import { ModuleUsers } from '../interfaces/model.users';
import { ModuleCartCab } from '../interfaces/model.cart_cab';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { UserService } from '../../services/users.service';
import { CartCabService } from '../../services/cart-cab.service';
import { CartDetService } from '../../services/cart-det.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-ventas',
  templateUrl: './detalle-ventas.component.html',
  styleUrls: ['./detalle-ventas.component.css']
})
export class DetalleVentasComponent implements OnInit {

  cartCabs: ModuleCartCab[] = []
  cartDets: ModuleCartDet[] = []
  productos: ModuleProductos[] = []
  usuarios: ModuleUsers[] = []

  //get fact cab datos
  public idCartCab!: number
  public fecha!: ""
  public TotalPagar!:number
  // public idPoducto!: number

  public form!: FormGroup

  constructor(private productosService: ProductosService,
    private usuarioService: UserService,
    private cartCabService: CartCabService,
    private cartDetService: CartDetService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(
      params=>{
        this.idCartCab=parseInt(params['cart_cab_id'])
        this.fecha=params['cart_cab_date']
        this.TotalPagar = params['cart_cab_total']
      }
    )
    this.cargarProducto()
    this.cargarUsers()
    
    this.cargarFactDet()
    
  }

  listCartDet: ModuleCartDet[] = []
 
  public cargarFactDet() {
    
    this.cartDetService.getFactDet(this.idCartCab).subscribe(
      (factDet:any)=>{
        this.cartDets = factDet
        
        this.cartDets.forEach(element => {
          if (element.cart_cab_id == this.idCartCab) {
            this.listCartDet.push(element)
            console.log(this.listCartDet);
            
          }
        });
              
      },(error) => console.log(error)
    )
  }

  


  public cargarUsers() {
    this.usuarioService.getUsers().subscribe(
      (user: any) => {
        this.usuarios = user
        // console.log(this.usuarios)
      }, (error) => console.log(error)
    )
  }
  public cargarProducto() {
    this.productosService.getProductos().subscribe(
      (producto: any) => {
        this.productos = producto;
        // console.log(this.productos);
      },
      (error) => console.log(error)
    );
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

}
