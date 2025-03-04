import { UntilDestroy } from '@ngneat/until-destroy';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { Component } from '@angular/core';

@UntilDestroy()
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ 'header.component.scss' ],
    standalone: true,
    imports: [
        ImageModule,
        ButtonModule,
    ]
})
export class HeaderComponent {}