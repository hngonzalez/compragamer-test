import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subcategory } from 'src/app/core/models/subcategory';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'subcategory-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './subcategory-card.component.html',
  styleUrls: ['./subcategory-card.component.scss']
})
export class SubcategoryCardComponent {
  @Input() subcategory!: Subcategory;
}
