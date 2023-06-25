import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  constructor() { }

  getItems(): Product[] {
    return this.cartItems;
  }

  addItem(product: Product): void {
    this.cartItems.push(product);
  }

  removeItem(product: Product): void {
    const index = this.cartItems.findIndex((item:Product) => item.id_producto === product.id_producto);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
