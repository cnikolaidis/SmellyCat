import { UntilDestroy } from '@ngneat/until-destroy';
import { CardModule } from 'primeng/card';
import { Component } from '@angular/core';

@UntilDestroy()
@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrl: './error.component.scss',
    standalone: true,
    imports: [
        CardModule
    ]
})
export class ErrorComponent {}