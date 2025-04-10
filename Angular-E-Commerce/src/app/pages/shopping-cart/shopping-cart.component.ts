import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  imports: [CurrencyPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  productService = inject(ProductsService);
  itemsInCart = this.productService.itemsInCart;
  quantity = this.productService.quantity


  removeHandler(p: Product) {
    this.productService.removeItem(p);
  }

  cartTotal() {
    return this.productService.total();
  }




}
