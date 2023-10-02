import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit{
  empleado: Empleado=new Empleado();
  ngOnInit(): void {

  }
  constructor(private empleadoSerivicio:EmpleadoService, private router:Router){

    
  }
  guardarEmpleado(){
    this.empleadoSerivicio.registrarEmpleado(this.empleado).subscribe(dato=>{
      console.log(dato);
      this.goToListEmpleados();
    }, error=> console.log("Error al registrar un empleado"));
  }

  goToListEmpleados(){
    this.router.navigate(['/empleados']);
  }
  public onSubmit(){
    console.log(this.empleado);
    this.guardarEmpleado();
  }

}

