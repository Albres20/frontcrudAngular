import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit{

  empleados:Empleado[];
  constructor(private empleadoServicio:EmpleadoService, private router:Router){};

  ngOnInit(): void {
    this.obtenerEmpleados();
  }
  private obtenerEmpleados(){
    this.empleadoServicio.obtenerEmpleados().subscribe(dato=>{
      this.empleados=dato;
    },
    error=>{
      console.error("Error al obtener data empleados:", error);
    }
    );
  }
  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar',id]);
  }
  eliminarEmpleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerEmpleados();
    });
    
  }

  verDetallesEmpleado(id:number){
    this.router.navigate(['detalles', id]);
    
  }
}
