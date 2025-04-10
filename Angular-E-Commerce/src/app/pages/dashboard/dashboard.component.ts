import { Component, inject, signal } from '@angular/core';
import { ItemCardComponent } from '../../shared/templates/item-card/item-card.component';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';
import { ItemCardContainerComponent } from '../../shared/templates/item-card-container/item-card-container.component';

@Component({
  selector: 'app-dashboard',
  imports: [ItemCardComponent, ItemCardContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  productService = inject(ProductsService);
  products = this.productService.products;
  departmentSelection = this.productService.departmentNameSelection;
  filteredDepartments = this.productService.filteredArray;
  itemsInCart = this.productService.itemsInCart;

  addToCartHandler(p: Product) {
    this.itemsInCart.update((items) => [...items, p]);
this.productService.checkForDuplicateItems(p)
  }

}
