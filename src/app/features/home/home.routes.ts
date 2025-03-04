import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';

export default [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'home', pathMatch: 'full', component: HomeComponent }
        ]
    }
] as Routes;