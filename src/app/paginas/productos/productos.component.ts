import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var swiper = new Swiper(".home-swiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  
    // var swiper = new Swiper(".new-swiper", {
    //   slidesPerView: 1,
    //   spaceBetween: 5,
    //   freeMode: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });

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

}
