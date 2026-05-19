import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppHeroComponent } from "../../../../components/app-hero/hero";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-pages',
  imports: [AppHeroComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePages {

  //constructor(private router: Router){}


  //goToStudentsPage(){
  //  this.router.navigate(['/students']);
  //}
    // inject() inyecta el servicio Router sin necesitar el constructor
  private router = inject(Router);

  /**
   * Navega programáticamente a /students.
   * Se llama desde el template con (click)="goToStudentsPage()".
   */
  goToStudentsPage(): void {
    this.router.navigate(['/students']);
  }

}
