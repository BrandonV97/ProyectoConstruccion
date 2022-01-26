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
    rol_id:       -1,
    rol_email:    '',
    rol_password: '',
    rol_type:     '',
    rol_date:     '',
    rol_state:    true,
  }

  constructor(private rolService: RolesService, private formbuilder: FormBuilder) { }

  roles: ModuleRoles [] = [];
  ngOnInit(): void {
    this.cargarRol()
    this.form = this.formbuilder.group({
      txtEmail:[''],
      txtPassword:[''],
      txtType:[''],
      txtDate:[''],
      txtState:['']
    })

  }

  public cargarRol(){
    this.rolService.getRoles().subscribe(
      (rol:any)=>{
        this.roles=rol
        console.log(this.roles);        
      },(error)=>console.log(error)
    )
  }

  
  public crearRol() {
    this.rolService.createRoles({

      rol_email:this.form.value.txtEmail,
      rol_password: this.form.value.txtPassword,
      rol_type: this.form.value.txtType,
      rol_date: this.form.value.txtDate,
      rol_state:this.form.value.txtState
    }).subscribe(res=>{
      console.log('Rol Creado Exitosamente');
      this.cargarRol()
    })
  }

  public eliminarRol(rol_id:any){
    console.log(rol_id);
    this.rolService.deleteRol(rol_id).subscribe(
      res=>{
        console.log('Rol Eliminadi');
        this.cargarRol()
      }
    )
  }



}
