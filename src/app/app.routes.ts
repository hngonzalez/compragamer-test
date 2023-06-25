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
        component: DashboardComponent,
        children: [ 
            {path: 'login', loadChildren: () => import('./core/auth/pages/sign-in/sign-in.routes')},
            {path: 'registrarse', loadChildren: () => import('./core/auth/pages/sign-up/sign-up.routes')} 
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
