import { UntilDestroy } from '@ngneat/until-destroy';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer'
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
        DrawerModule,
    ]
})
export class HeaderComponent {
    drawerOpen: boolean = false;
}