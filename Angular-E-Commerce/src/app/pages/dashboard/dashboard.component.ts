import { Component, signal } from '@angular/core';
import { ItemCardComponent } from '../../shared/templates/item-card/item-card.component';
import { Product } from '../../shared/models/product.model';
import DUMMY_DATA from '../../shared/data/products'


@Component({
  selector: 'app-dashboard',
  imports: [ItemCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  products = signal<Product[]>(DUMMY_DATA);
}
