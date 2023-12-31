import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryCardComponent } from './subcategory-card.component';

describe('SubcategoryCardComponent', () => {
  let component: SubcategoryCardComponent;
  let fixture: ComponentFixture<SubcategoryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SubcategoryCardComponent]
    });
    fixture = TestBed.createComponent(SubcategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
