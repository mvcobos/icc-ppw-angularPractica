import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.css',
})
export class AppFooterComponent {
  readonly year = signal(new Date().getFullYear());
  readonly author = signal('veronica cobos');
  readonly email = signal('MCOBOSA@ESt.UPS.EDU.EC');
  readonly amount = signal(2024.99);
  readonly lastUpdate = signal(new Date());
}