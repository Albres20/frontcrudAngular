import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseUrl="http://localhost:8090/api/v1/empleados";

  
  constructor(private httClient:HttpClient) { }
  //El siguiente metodo nos sirve para obtener los empleados 

  obtenerEmpleados():Observable<Empleado[]>{
    return this.httClient.get<Empleado[]>(`${this.baseUrl}`);
  }
  //Sirve para registrar un empleado
  registrarEmpleado(empleado:Empleado):Observable<Object>{
    return this.httClient.post(`${this.baseUrl}`, empleado);
  }
  actualizarEmpleado(id:number, empleado:Empleado):Observable<Object>{
    return this.httClient.put(`${this.baseUrl}/${id}`, empleado);
  }
  obtenerEmpleadoPorId(id:number):Observable<Object>{
    return this.httClient.get(`${this.baseUrl}/${id}`);
  }
  eliminarEmpleado(id:number):Observable<Object>{
    console.log("Estoy aqui", id);
    return this.httClient.delete(`${this.baseUrl}/${id}`);
  }
}
