import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

export default [
    {
        path     : '',
        component: ProductsComponent,
    },
    {
        path     : ':id',
        component: ProductsComponent,
    },
] as Routes;
