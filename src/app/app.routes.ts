import { Route, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', pathMatch : 'full', redirectTo: 'categories' },
    // Auth routes for guests
    {
        path: '',
        /* canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard], */
        children: [ 
            /* {path: 'sign-in', loadChildren: () => import('./core/auth/sign-in/sign-in.routes')},
            {path: 'sign-up', loadChildren: () => import('./core/auth/sign-up/sign-up.routes')}  */
        ]
    }, 
    
    // Auth routes for authenticated users
    {
        path: '',
        /* canActivate: [AuthGuard],
        canActivateChild: [AuthGuard], */
        component: DashboardComponent,
        children: [
            { path: 'categories', loadChildren: () => import('./features/categories/dashboard.routes') },
            { path: 'products', loadChildren: () => import('./features/products/products.routes') }
        ]
    },
    {path: '**', component: PageNotFoundComponent}
];
