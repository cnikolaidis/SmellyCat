import { UntilDestroy } from '@ngneat/until-destroy';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { Component } from '@angular/core';

@UntilDestroy()
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ 'footer.component.scss' ],
    standalone: true,
    imports: [
        ImageModule,
        ButtonModule,
    ]
})
export class FooterComponent {
    footerTitle = 'Copyright © SmellyCat ' + new Date().getFullYear();
}