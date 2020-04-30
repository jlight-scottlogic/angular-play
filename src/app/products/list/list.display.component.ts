import { Component, Input } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'list-display',
  templateUrl: './list.display.component.html',
  styleUrls: ['./list.display.component.scss']
})
export class ListDisplayComponent {
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
      filter: true
    },
    {
      headerName: 'Date Added',
      field: 'dateAdded',
      sortable: true,
      filter: true,
      cellRenderer: ({ value }) => value.format('YYYY-MM-DD')
    }
  ];
}
