import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../models';

@Component({
  selector: 'create-display',
  templateUrl: './create.display.component.html',
  styleUrls: ['./create.display.component.scss']
})
export class CreateDisplayComponent {

  @Output() onSubmit = new EventEmitter<Product>()

  form = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    dateAdded: new FormControl()
  })

  public onSubmitClick(event: MouseEvent) {
    event.preventDefault();

    this.onSubmit.emit({
      id: null,
      name: this.form.value.name,
      description: this.form.value.description,
      dateAdded: this.form.value.dateAdded,
      isActive: true
    });
  }
}
