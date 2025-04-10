import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductsService } from '../../services/products.service';
import Fuse from 'fuse.js';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  productService = inject(ProductsService)
  shoppingCart = this.productService.itemsInCart
  products = this.productService.products
  filteredArray = this.productService.filteredArray
  departmentNameSelection = this.productService.departmentNameSelection
  quantity = this.productService.quantity

  searchInput = ''


  options = {
    keys: ['productName', 'department', ''],
    threshold: 0.3
  }
  private fuse = new Fuse(this.products(), this.options)

  searchHandler() {
    const results = this.fuse.search(this.searchInput)
    const mappedItems = results.map(i => i.item)
    console.log(mappedItems);
    this.filteredArray.set(mappedItems)
    if (!this.searchInput) {
      this.filteredArray.set(this.products())
    }
  }

  resetHandler() {
    this.filteredArray.set(this.products())
    this.departmentNameSelection.set('All Products');
  }
}
