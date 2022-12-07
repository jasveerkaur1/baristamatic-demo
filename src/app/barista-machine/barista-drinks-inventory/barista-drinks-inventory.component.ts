import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse, fadeIn } from 'ng-animate';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { IngredientQuantity } from 'src/app/core/inventory';

@Component({
  selector: 'app-barista-drinks-inventory',
  templateUrl: './barista-drinks-inventory.component.html',
  styleUrls: ['./barista-drinks-inventory.component.scss']
})
export class BaristaDrinksInventoryComponent implements OnInit {
  @Input() loading = false;
  @Input() inventory: IngredientQuantity[];
  @Output() restockInventory = new EventEmitter();
  faCoffee = faCoffee;

  constructor() {}

  ngOnInit() {}

  handleRestockInventory() {
    this.restockInventory.emit();
  }
}
