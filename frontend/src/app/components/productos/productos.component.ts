import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto-service';

@Component({
  imports: [CommonModule],
  selector: 'app-productos',
  styleUrl: './productos.component.css',
  templateUrl: './productos.component.html',
})
export class ProductosComponent {
  productos:Producto[]=[]

  constructor(private productoService:ProductoService){}

  ngOnInit():void{
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }
}
