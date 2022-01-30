import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup } from '@angular/forms';
import { RolesService } from '../../services/roles.service';
import { ModuleRoles } from '../interfaces/model.roles';

@Component({
  selector: 'app-crud-roles',
  templateUrl: './crud-roles.component.html',
  styleUrls: ['./crud-roles.component.css']
})
export class CrudRolesComponent implements OnInit {

  public form!: FormGroup;

  public informacionRoles = {
    rol_id: -1,
    rol_email: '',
    rol_password: '',
    rol_type: '',
    rol_date: '',
    rol_state: true,
  }

  constructor(private rolService: RolesService, private formbuilder: FormBuilder) { }

  roles: ModuleRoles[] = [];
  ngOnInit(): void {
    this.cargarRol()
    this.form = this.formbuilder.group({
      txtEmail: [''],
      txtPassword: [''],
      txtType: [''],
      txtDate: [''],
      txtState: ['']
    })

  }

  public cargarRol() {
    this.rolService.getRoles().subscribe(
      (rol: any) => {
        this.roles = rol
        console.log(this.roles);
      }, (error) => console.log(error)
    )
  }


  public crearRol() {
    this.rolService.createRoles({

      rol_email: this.form.value.txtEmail,
      rol_password: this.form.value.txtPassword,
      rol_type: this.form.value.txtType,
      rol_date: this.form.value.txtDate,
      rol_state: this.form.value.txtState
    }).subscribe(res => {
      console.log('Rol Creado Exitosamente');
      this.cargarRol()
    })
  }

  public eliminarRol(rol_id: any) {
    console.log(rol_id);
    this.rolService.deleteRol({
      rol_id: rol_id,
      rol_state:false}).subscribe(
      res => {
        console.log('Rol Eliminad0');
        this.cargarRol()
      }
    )
  }

  public actualizarRol(rol_id: any) {
    this.rolService.putUpdateRol({
      rol_id: rol_id,
      rol_email: this.form.value.txtEmail,
      rol_password: this.form.value.txtPassword,
      rol_type: this.form.value.txtType,
      rol_date: this.form.value.txtDate,
      rol_state: true
    }).subscribe(res => {
      console.log('Rol actualizado');
      this.cargarRol()
    })
  }

  public infoUpdateRol(rol_id: any, rol_email: any, rol_password: any, rol_type: any, rol_date: any, rol_state: any) {
    this.informacionRoles.rol_id = rol_id;
    this.informacionRoles.rol_email = rol_email;
    this.informacionRoles.rol_password = rol_password;
    this.informacionRoles.rol_type = rol_type;
    this.informacionRoles.rol_date = rol_date;
    this.informacionRoles.rol_state = rol_state;
  }


  public activeModal(){
    var modal = document.getElementById("myModal");
    modal?.classList.add("modal_show")
  }
  
  public inactiveModal(){
    var modal = document.getElementById("myModal");
    modal?.classList.remove("modal_show")
  }


  // <script>
  // // Get the modal
  // var modal = document.getElementById("myModal");

  // // Get the button that opens the modal
  // var btn = document.getElementById("myBtn");

  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // // When the user clicks the button, open the modal 
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }

  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }

  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }
  // </script>


}
