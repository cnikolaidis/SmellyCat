import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UntilDestroy } from '@ngneat/until-destroy';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@UntilDestroy()
@Component({
    selector: 'app-core-layout',
    templateUrl: './core-layout.component.html',
    styleUrls: [ 'core-layout.component.scss' ],
    standalone: true,
    imports: [
        RouterOutlet,

        HeaderComponent,
        FooterComponent
    ]
})
export class CoreLayoutComponent {}