import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() editarClick = new EventEmitter<any>();
  @Output() deleteClick = new EventEmitter<any>();

  editRow(rowData: any) {
    this.editarClick.emit(rowData);
  }

  deleteRow(rowData: any) {
    this.deleteClick.emit(rowData);
  }
}