import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink, MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  _cartService = inject(CartService);
  cart: Product[] = [];

  ngOnInit(): void {
    this.cart = this._cartService.getItems();
  }
}