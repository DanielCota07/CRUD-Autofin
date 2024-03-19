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
  @Input() dataHeaders: any[] | undefined;
  @Input() dataRows!: any[]; 
  @Input() tableTitle: string | undefined; 

  editRow(rowData: any) {
    console.log('Editar fila:', rowData);
  }

  deleteRow(rowData: any) {
    console.log('Eliminar fila:', rowData);
  }
}