import { Component, Input, ViewChild } from '@angular/core';
import { Product } from '../models';
import { ButtonComponent } from './button/button.component';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'list-display',
  templateUrl: './list.display.component.html',
  styleUrls: ['./list.display.component.scss']
})
export class ListDisplayComponent {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  
  @Input() public products: Product[] = [];

  public columnDefs = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Description',
      field: 'description',
      sortable: true,
      filter: true,
      flex: 1
    },
    {
      headerName: 'Date Added',
      field: 'dateAdded',
      sortable: true,
      filter: true,
      width: 140,
      valueFormatter: ({ value }) => value.format('YYYY-MM-DD')
    },
    {
      cellRendererFramework: ButtonComponent,
      cellClass: 'p-0',
      width: 75
    }
  ];

  onGridReady() {
    // this.agGrid.columnApi.autoSizeAllColumns();
    // this.agGrid.api.sizeColumnsToFit();
  }
}
