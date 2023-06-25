import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, of } from 'rxjs';
import { Product } from '../models/product';
import { Subcategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * API call to obtain all products
   * @returns 
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://static.compragamer.com/test/productos.json');
  }

  /**
   * API call to obtain all categories
   * @returns 
   */
  getAllCategories(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>('https://static.compragamer.com/test/subcategorias.json');
  }

  /**
   * API call to obtain all products by subcategoryId
   * @param idSubcategory 
   * @returns 
   */
  getAllProductsBySubcategoryId(idSubcategory: number): Observable<Product[]> {
    return this.http.get<Product[]>('https://static.compragamer.com/test/productos.json').pipe(
      map((products: Product[]) => products.filter((product: Product) => product.id_subcategoria == idSubcategory))
    );
  }
  
}
