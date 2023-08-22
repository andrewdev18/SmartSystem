import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }

  items: MenuItem[] = [
    {
      label: 'Inicio',
      icon: PrimeIcons.HOME,
      routerLink: 'home',
      command() {
        console.log('Inicio')
      },
    },
    {
      label: 'Lecciones',
      icon: PrimeIcons.BOOK,
      routerLink: 'lessons',
      command() {
        console.log('Lecciones')
      },
    },
    {
      label: 'Ejercicios',
      icon: PrimeIcons.BOOKMARK_FILL,
      routerLink: 'games',
      command() {
        console.log('Ejercicios')
      },
    },
  ]
}
