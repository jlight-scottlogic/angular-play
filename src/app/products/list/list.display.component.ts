import { Component, Input } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'list-display',
  templateUrl: './list.display.component.html',
  styleUrls: ['./list.display.component.scss']
})
export class ListDisplayComponent {
  @Input() public products: Product[] = [];
}
