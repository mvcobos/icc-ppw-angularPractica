import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-students-page',
  imports: [RouterLink],
  templateUrl: './students-page.html',
  styleUrl: './students-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsPage {
  readonly students = signal([
    {id:1, name: "Vero Cobos"},
    {id:2, name: "Diego Perez"},
    {id:3, name: "Maria Pinos"},
    {id:4, name: "Alvaro Lomas"},
    {id:5, name: "Alexandra Alcivar"}
  ]);
id: any;
}
