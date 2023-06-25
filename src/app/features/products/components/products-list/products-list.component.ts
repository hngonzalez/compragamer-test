import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/core/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsCardComponent } from '../products-card/products-card.component';


@Component({
  selector: 'products-list',
  standalone: true,
  imports: [CommonModule, ProductsCardComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products!: Product[];

  constructor(
  ) {
    
  }

  ngOnInit(): void {
  }
}
