import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { RouterLink, RouterOutlet } from '@angular/router';
import DUMMY_DATA from '../../data/products'
import { DepartmentProductsComponent } from "../../../department-products/department-products.component";
// import { products } from "../../data/products.js"

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  products = signal<Product[]>(DUMMY_DATA);
  departmentProducts = signal<Product[]>([])
  selectedDepartment = signal<boolean>(false)
  

    getDepartmentNames() {
      const departmentsArray = this.products().map(p => p.department)
      const departmentNames = [...new Set(departmentsArray)]
      return departmentNames.sort()
    }


   
}
