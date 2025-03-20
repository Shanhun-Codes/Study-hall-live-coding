import { Component, input, signal } from '@angular/core';
import  DUMMY_DATA  from '../shared/data/products'
import { ItemCardComponent } from "../shared/templates/item-card/item-card.component";
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-department-products',
  imports: [ItemCardComponent],
  templateUrl: './department-products.component.html',
  styleUrl: './department-products.component.css'
})
export class DepartmentProductsComponent {
 data = signal<Product[]>(DUMMY_DATA)
}
