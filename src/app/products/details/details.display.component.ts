import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'details-display',
  templateUrl: './details.display.component.html',
  styleUrls: ['./details.display.component.scss']
})
export class DetailsDisplayComponent implements OnChanges {
  @Input() public product: Product = null;
  details: { display: string; value: string; }[];

  ngOnChanges(_: SimpleChanges) {
    this.details = this.product ? [
      { display: 'Name', value: this.product.name },
      { display: 'Description', value: this.product.description },
      { display: 'Date Added', value: this.product.dateAdded.format('DD/MM/YYYY') }
    ] : [];
  }
}
