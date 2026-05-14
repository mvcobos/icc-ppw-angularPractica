import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './components/app-header/app-header';
import { AppHeroComponent } from './components/app-hero/hero';
import { AppFooterComponent } from './components/app-footer/app-footer';  // ← AGREGAR

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, AppHeroComponent, AppFooterComponent],  // ← AGREGAR
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  title = 'ppw-angular-21';
  //protected readonly title = signal('ppw-angular');

  isLoggedIn = false;

  materias = ['Programacion',
    'Estructura de datos',
    'DB'
  ]
}
