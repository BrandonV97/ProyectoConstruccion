import { Component, OnInit } from '@angular/core';
import { ModuleCartCab } from '../interfaces/model.cart_cab';
import { CartCabService } from '../../services/cart-cab.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styleUrls: ['./lista-carrito.component.css']
})
export class ListaCarritoComponent implements OnInit {
  cartCabs: ModuleCartCab[] = []
  constructor(private cartCabService: CartCabService,) { }

  ngOnInit(): void {
    this.cargarCartCabs()
  }
  public cargarCartCabs() {
    this.cartCabService.getCartCab().subscribe((carCab: any) => {
      this.cartCabs = carCab
      console.log(this.cartCabs);
    })
  }



}
