import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	imports: [
		RouterOutlet
	],
})
export class AppComponent {}
