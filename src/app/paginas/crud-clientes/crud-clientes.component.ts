import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/users.service';
import { ModuleUsers } from '../interfaces/model.users';
import { RolesService } from '../../services/roles.service';
import { ModuleRoles } from '../interfaces/model.roles';

@Component({
  selector: 'app-crud-clientes',
  templateUrl: './crud-clientes.component.html',
  styleUrls: ['./crud-clientes.component.css']
})
export class CrudClientesComponent implements OnInit {
  
  public form!: FormGroup;
  public informacionUsers = {
    user_id: -1,
    rol_id: '',
    user_names: '',
    user_phone: '',
    user_addres: '',
    user_state: true
  }

  constructor(private userService: UserService,
    private rolService: RolesService,
     private formBuilder: FormBuilder) { }

  users: ModuleUsers[] = [];
  roles: ModuleRoles[]=[]
  ngOnInit(): void {
    this.cargarUsers()
    this.cargarRol()
    this.form = this.formBuilder.group({
      rolSelected:[],
      txtRol_id:[''],
      txtNames: [''],
      txtPhone: [''],
      txtAddres: [''],
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

  public cargarUsers() {
    this.userService.getUsers().subscribe(
      (user: any) => {
        this.users = user
        console.log(this.users)
      }, (error) => console.log(error)
    )
  }
  public getNameRol(id:any){
    let nombre = this.roles.find(item=>{
      return item.rol_id== id
    })
    return nombre?.rol_type
  }

  public crearUser() {
    this.userService.CreateUsers({
      rol_id: this.form.value.rolSelected,
      user_names: this.form.value.txtNames,
      user_phone: this.form.value.txtPhone,
      user_addres: this.form.value.txtAddres,
      user_state: this.form.value.txtState
    }).subscribe(res => {
      console.log('Usuario Creado');
      this.cargarUsers()
    })

  }

  public eliminarUser(user_id: any) {
    console.log(user_id);
    
    this.userService.deleteRol({
      user_id: user_id,
      rol_state: false
    }).subscribe(res => {
      console.log('Usuario Eliminado');
      this.cargarUsers()
    })
  }

  public actualizarUser(user_id: any) {
    this.userService.UpdateUsers({
      user_id: user_id,
      rol_id: this.form.value.rolSelected,
      user_names: this.form.value.txtNames,
      user_phone: this.form.value.txtPhone,
      user_addres: this.form.value.txtAddres,
      user_state: this.form.value.txtState
    }).subscribe(res => {
      console.log('Usuario Actualizado');
      this.cargarUsers()
    })
  }

  public infoUpdateUser(user_id: any, rol_id: any, user_names: any, user_phone: any, user_addres: any, user_state: any) {
    this.informacionUsers.user_id = user_id;
    this.informacionUsers.rol_id = rol_id;
    this.informacionUsers.user_names = user_names;
    this.informacionUsers.user_phone = user_phone;
    this.informacionUsers.user_addres = user_addres;
    this.informacionUsers.user_state = user_state;
  }

  public activeModal() {
    var modal = document.getElementById("myModal");
    modal?.classList.add("modal_show")
  }

  public inactiveModal() {
    var modal = document.getElementById("myModal");
    modal?.classList.remove("modal_show")
  }



}
