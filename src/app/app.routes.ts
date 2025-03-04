import { CoreLayoutComponent } from './core/core-layout/core-layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: CoreLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },

            { path: 'home', loadChildren: () => import('./features/home/home.routes') },
            
            { path: '**', redirectTo: 'error', pathMatch: 'full' },

            { path: 'error', loadChildren: () => import('./features/error/error.routes') }
        ]
    }
];