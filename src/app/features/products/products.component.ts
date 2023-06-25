import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductsListComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  _productsService  = inject(ProductsService);
  _activatedRoute   = inject(ActivatedRoute);
  products$: Observable<Product[]> = new Observable();
  idSubcategory!: any;
  
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.idSubcategory  = params.get('id');
      
      if (this.idSubcategory) {
        this.products$      = this._productsService.getAllProductsBySubcategoryId(this.idSubcategory);
      } else {
        this.products$      = this._productsService.getAllProducts();
      }
    });
  }

}
