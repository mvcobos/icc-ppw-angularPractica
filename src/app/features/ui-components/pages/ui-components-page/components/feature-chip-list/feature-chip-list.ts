import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-chip-list',
  standalone: true,
  imports: [],
  templateUrl: './feature-chip-list.html',
})
export class FeatureChipList {
  title = input<string>('Características');
  chips = input<string[]>([]);
}