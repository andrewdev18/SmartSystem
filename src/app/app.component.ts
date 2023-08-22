import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[] = [
    {
      label: 'Inicio',
      icon: PrimeIcons.HOME,
      command() {
        console.log('Inicio')
      },
    },
    {
      label: 'Lecciones',
      icon: PrimeIcons.BOOK,
      command() {
        console.log('Lecciones')
      },
    },
    {
      label: 'Ejercicios',
      icon: PrimeIcons.BOOKMARK_FILL,
      command() {
        console.log('Ejercicios')
      },
    },
  ]
}
