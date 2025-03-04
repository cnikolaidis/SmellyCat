import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GoogleMapsLoaderService {
	private static readonly API_KEY = 'AIzaSyA3qL3UR_sOhxvy1sjSLBJgS-wPcR434Os';

	private scriptLoadingPromise: Promise<void> | null = null;

	load(): Promise<void> {
		if (this.scriptLoadingPromise) {
			return this.scriptLoadingPromise;
		}

		this.scriptLoadingPromise = new Promise((resolve, reject) => {
			if ((window as any).google && (window as any).google.maps) {
				resolve();
				return;
			}

			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=${GoogleMapsLoaderService.API_KEY}`;
			script.async = true;
			script.defer = true;
			script.onload = () => resolve();
			script.onerror = (error) => reject(error);
			document.body.appendChild(script);
		});

		return this.scriptLoadingPromise;
	}
}
