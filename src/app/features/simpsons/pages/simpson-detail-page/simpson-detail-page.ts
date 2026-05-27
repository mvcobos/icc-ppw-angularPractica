import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SimpsonsService } from '../../services/simpsons.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-simpson-detail-page',
  imports: [RouterLink],
  templateUrl: './simpson-detail-page.html',
})
export class SimpsonDetailPage {
  
  // Dependencias del componente.
  private route = inject(ActivatedRoute);
  private simpsonsService = inject(SimpsonsService);
  // Convertimos el parametro de ruta a numero.
  private characterId = Number(this.route.snapshot.paramMap.get('id'));
  
  //private cacheService = inject(SimpsonsCacheService);
    // Resource reactivo: expone isLoading, error y value para el template.
  characterResource = rxResource({
    stream: () => {
      return this.simpsonsService.getCharacterById(this.characterId);
    },
  });
  cacheService: any;

}
