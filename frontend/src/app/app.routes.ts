import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    { path: 'productos', component: ProductosComponent },
    { path: '', redirectTo: 'productos', pathMatch: 'full' },
];
