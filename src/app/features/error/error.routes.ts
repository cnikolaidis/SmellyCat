import { ErrorComponent } from './error.component';
import { Routes } from '@angular/router';

export default [
    {
        path: '',
        component: ErrorComponent,
        children: [
            { path: 'error', pathMatch: 'full', component: ErrorComponent },
            { path: 'error/:code', pathMatch: 'full', component: ErrorComponent }
        ]
    }
] as Routes;