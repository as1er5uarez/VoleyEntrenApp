import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { EjerciciosComponent } from '../ejercicios/ejercicios.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, EjerciciosComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isAccordionOpen: boolean = false;

  toggleAccordion(id: string) {
    this.isAccordionOpen = !this.isAccordionOpen;
    const overlay = document.getElementById('overlay');
    if (overlay) {
      if (this.isAccordionOpen) {
        overlay.classList.add('active');
        document.body.classList.add('overflow-hidden');
      } else {
        overlay.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
      }
    }
  }
}
