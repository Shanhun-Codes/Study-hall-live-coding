import { Component, EventEmitter, input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [CurrencyPipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Output() cartProduct = new EventEmitter<Product>()
  data = input.required<Product | undefined>()

  addCartHandler() {
    this.cartProduct.emit(this.data())
  }
}
