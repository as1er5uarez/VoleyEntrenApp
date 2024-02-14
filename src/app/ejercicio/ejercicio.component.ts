import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { EjerciciosComponent } from '../ejercicios/ejercicios.component';

@Component({
  selector: 'app-ejercicio',
  standalone: true,
  imports: [ RouterLink, RouterOutlet, RouterLinkActive, NavbarComponent, EjerciciosComponent ],
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.scss'
})
export class EjercicioComponent {

}
