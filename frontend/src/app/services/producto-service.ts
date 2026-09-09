import { Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Producto } from '../models/producto.model';

@Injectable({providedIn:'root'})
export class ProductoService {
    private apiUrl = '/api/productos';

    constructor(private http:HttpClient){}

    obtenerProductos():Observable<Producto[]>{
        return this.http.get<Producto[]>(this.apiUrl);
    }
}
