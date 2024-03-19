import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-table',
  standalone: true, // Elimina este atributo
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent  {
  @Input() dataHeaders: any[] | undefined; // Propiedad de entrada para los encabezados de la tabla
  @Input() dataRows!: any[]; // Propiedad de entrada para las filas de datos de la tabla
  @Input() tableTitle: string | undefined; // Propiedad de entrada para el título de la tabla

  editRow(rowData: any) {
    // Aquí puedes implementar la lógica para editar la fila, por ejemplo, abrir un modal de edición
    console.log('Editar fila:', rowData);
  }

  // Método para eliminar una fila
  deleteRow(rowData: any) {
    // Aquí puedes implementar la lógica para eliminar la fila, por ejemplo, mostrar un mensaje de confirmación
    console.log('Eliminar fila:', rowData);
  }
}