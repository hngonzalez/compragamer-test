import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subcategory } from 'src/app/core/models/subcategory';
import { SubcategoryCardComponent } from '../subcategory-card/subcategory-card.component';

@Component({
  selector: 'categories-list',
  standalone: true,
  imports: [CommonModule, SubcategoryCardComponent],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {
  @Input() categories!: Subcategory[];
  
}
