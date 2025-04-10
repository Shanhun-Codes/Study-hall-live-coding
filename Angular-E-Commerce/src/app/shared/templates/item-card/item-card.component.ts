import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-item-card',
  imports: [CurrencyPipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  productService = inject(ProductsService)
  data = input.required<Product>();
  itemsInCart = this.productService.itemsInCart


}
