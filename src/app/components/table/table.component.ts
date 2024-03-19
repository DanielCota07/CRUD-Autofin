import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  standalone: true, // Elimina este atributo
  imports: [CommonModule, TableModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent  {
  @Input() dataHeaders: any[] | undefined; // Propiedad de entrada para los encabezados de la tabla
  @Input() dataRows!: any[]; // Propiedad de entrada para las filas de datos de la tabla
  @Input() tableTitle: string | undefined; // Propiedad de entrada para el título de la tabla
}