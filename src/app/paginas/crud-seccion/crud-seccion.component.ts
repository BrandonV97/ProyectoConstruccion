import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SeccionesService } from '../../services/secciones.service';
import { ModuleSecciones } from '../interfaces/model.secciones';

@Component({
  selector: 'app-crud-seccion',
  templateUrl: './crud-seccion.component.html',
  styleUrls: ['./crud-seccion.component.css'],
})
export class CrudSeccionComponent implements OnInit {
  public form!: FormGroup;

  public informacionSecciones = {
    sec_id: -1,
    sec_name: '',
    sec_state: true,
  };

  constructor(
    private seccionesService: SeccionesService,
    private formbuilder: FormBuilder
  ) {}

  secciones: ModuleSecciones[] = [];

  ngOnInit(): void {
    this.cargarSecciones();
    this.form = this.formbuilder.group({
      txtName: [''],
    });
    var swiper = new Swiper('.home-swiper', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    });

    var swiper = new Swiper('.new-swiper', {
      slidesPerView: 3,
      spaceBetween: 5,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  public cargarSecciones() {
    this.seccionesService.getSecciones().subscribe(
      (seccion: any) => {
        this.secciones = seccion;
        console.log(this.secciones);
      },
      (error) => console.log(error)
    );
  }

  public crearSeccion() {
    this.seccionesService
      .createSecciones({
        sec_name: this.form.value.txtName,
      })
      .subscribe((res) => {
        console.log('Seccion creada Exitosamente');
        this.cargarSecciones();
      });
  }

  public eliminarSeccion(sec_id: any) {
    console.log(sec_id);
    this.seccionesService
      .deleteSecciones({
        sec_id: sec_id,
      })
      .subscribe((res) => {
        console.log('Seccion Eliminad0');
        this.cargarSecciones();
      });
  }

  public actualizarSeccion(sec_id: any) {
    this.seccionesService
      .updateSecciones({
        sec_id: sec_id,
        sec_name: this.form.value.txtName,
      })
      .subscribe((res) => {
        console.log('Seccion actualizado');
        this.cargarSecciones();
      });
  }

  public infoUpdateSeccion(
    sec_id: any,
    sec_name: any
  ) {
    this.informacionSecciones.sec_id = sec_id;
    this.informacionSecciones.sec_name = sec_name;
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
