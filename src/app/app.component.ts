import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, EjercicioComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voley_entrena';
  ngOnInit() {
    initFlowbite();
  }
}
