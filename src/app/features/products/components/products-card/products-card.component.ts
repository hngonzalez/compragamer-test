import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/core/models/product';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'products-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent {
  @Input() product!: Product;
  _cartService = inject(CartService);
  productAdded: boolean = false;

  /**
   * Function that calls the cart service and adds an item to it.
   * @param product to add
   */
  addToCart(product: Product) {
    this._cartService.addItem(product);
    this.productAdded = true;
    setTimeout(() => {
      this.productAdded = false;
    }, 1000);
  }
}
