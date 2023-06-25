import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductsService } from 'src/app/core/services/products.service';
import { Observable } from 'rxjs';
import { Subcategory } from 'src/app/core/models/subcategory';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, CategoriesListComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit { 
  _productsService = inject(ProductsService);
  categories$: Observable<Subcategory[]> = new Observable();
  
  ngOnInit(): void {
    this.categories$ = this._productsService.getAllCategories();
  }

}
