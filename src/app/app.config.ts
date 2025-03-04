import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Material from '@primeng/themes/material';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideAnimations(),
		providePrimeNG({
			theme: {
				preset: Material,
				options: {
					darkModeSelector: 'always-light'
				}
			}
		}),
	]
};
