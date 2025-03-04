import { UntilDestroy } from '@ngneat/until-destroy';
import { Component } from '@angular/core';

@UntilDestroy()
@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrl: './error.component.scss',
    standalone: true,
})
export class ErrorComponent {}