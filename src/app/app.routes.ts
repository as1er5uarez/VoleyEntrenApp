import { Routes } from '@angular/router';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { NavbarComponent } from './navbar/navbar.component';


export const routes: Routes = [
    { path: '', component: NavbarComponent },
    { path: 'ejercicio', component: EjercicioComponent },
]