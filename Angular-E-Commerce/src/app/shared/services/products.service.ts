import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import DUMMY_DATA from '../data/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal<Product[]>(DUMMY_DATA);
  departmentNameSelection = signal<string>('');
  filteredArray = signal<Product[] | null>(null);
  itemsInCart = signal<Product[]>([]);
  duplicateTotal = signal<number>(0);
  quantity: number = 0;
  timesClicked: number = 0;

  getProducts() {
    this.filteredArray.set(this.products());
    this.departmentNameSelection.set('All Products');
  }

  removeItem(p: Product) {
    const filteredArray = this.itemsInCart().filter((item) => item !== p);
    this.itemsInCart.set(filteredArray);
  }

  getDepartmentNames() {
    const departmentsArray = this.products().map((p) => p.department);
    const departmentNames = [...new Set(departmentsArray)];
    return departmentNames.sort();
  }

  departmentNav(d: string) {
    const filteredArray = this.products().filter((p) => p.department === d);
    this.filteredArray.set(filteredArray);
    this.departmentNameSelection.set(d);
  }

  total() {
    let total = 0;
    this.itemsInCart().forEach((i) => {
      return (total += i.price);
    });
    return total;
  }

  // TODO: quantity is not working
  checkForDuplicateItems(p: Product) {
    this.timesClicked++;
    this.itemsInCart().forEach((item) => {
      if (item.sku === p.sku) {
        this.quantity++;
      }
    });
    this.itemsInCart.update((i) => [...new Set(i)]);
    console.log(this.quantity);
  }
}
