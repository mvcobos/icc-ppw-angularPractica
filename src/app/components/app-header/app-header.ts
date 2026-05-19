import { UpperCasePipe } from '@angular/common';
//import { computeMsgId } from '@angular/compiler';
import { ChangeDetectionStrategy, Component,computed,signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [UpperCasePipe, RouterLink, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppHeader {
  readonly brand = signal("PPW Angular")
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(
    () => 
    (this.showInfo() 
    ? "Ocultar informacion" 
    : "Mostrar información"));

  toggleInfo(){
    this.showInfo.update((value) => !value);
  }

  changeBrand(): void{
    //actualiar el valor de la señal brand
    this.brand.update((valor) => valor + "!");
  }

  resetBrand(): void{
    this.brand.set("PPW Angular");
  }

}