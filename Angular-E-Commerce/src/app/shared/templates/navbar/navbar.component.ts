import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  productService = inject(ProductsService);

  getDepartmentNamesHandler() {
    return this.productService.getDepartmentNames();
  }

  depClickHandler(d: string) {
    this.productService.departmentNav(d);
  }

  allProductsHandler() {
    this.productService.getProducts();
  }
}
