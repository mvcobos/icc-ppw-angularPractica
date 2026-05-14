import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppHeroComponent } from "../../../../components/app-hero/hero";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-pages',
  imports: [AppHeroComponent],
  templateUrl: './home-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePages {

  constructor(private router: Router){}

  goToStudentsPage(){
    this.router.navigate(['/students']);
  }
}
