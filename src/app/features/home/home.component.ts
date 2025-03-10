import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleMapsLoaderService } from '../../shared/google-maps-loader.service';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { MailService } from '../../shared/mail.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { UntilDestroy } from '@ngneat/until-destroy';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';

@UntilDestroy()
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	standalone: true,
	providers: [
		MessageService
	],
	imports: [
		ToastModule,
		ImageModule,
		TextareaModule,
		InputTextModule,

		ReactiveFormsModule,

		GoogleMapsModule
	]
})
export class HomeComponent implements OnInit {
	@ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
	
	contactForm!: FormGroup;
	center: google.maps.LatLngLiteral = { lat: 40.6343, lng: 22.9430 };
	zoom = 14;

	private googleMapsLoaderSvc: GoogleMapsLoaderService = inject(GoogleMapsLoaderService);
	private messageSvc: MessageService = inject(MessageService);
	private formBuilder: FormBuilder = inject(FormBuilder);
	private mailSvc: MailService = inject(MailService);

	constructor() {
		this.contactForm = this.formBuilder.group({
			fullName: ['', [Validators.required, Validators.minLength(3)]],
			email: ['', [Validators.required, Validators.email]],
			city: ['', Validators.required],
			postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
			address: ['', Validators.required],
			message: ['', [Validators.required, Validators.minLength(10)]],
			terms: [false, Validators.requiredTrue]
		});
	}

	async ngOnInit() {
		await this.googleMapsLoaderSvc.load();
		this.initializeGoogleMap();
	}

	submitForm() {
		if (!this.contactForm.valid) {
			this.messageSvc.add({ severity: 'warn', summary: 'Warning', detail: 'Please complete all the form fields correctly', life: 3000 });
			return;
		}
		const mailParams = {
			receiver: 'Smelly Cat',
			fullName: this.contactForm.get('fullName')?.value,
			city: this.contactForm.get('city')?.value,
			address: this.contactForm.get('address')?.value,
			postalCode: this.contactForm.get('postalCode')?.value,
			message: this.contactForm.get('message')?.value,
			email: this.contactForm.get('email')?.value
		};
		this.mailSvc
			.sendMail(mailParams)
			.then(() => this.messageSvc.add({ severity: 'success', summary: 'Success', detail: 'Message was sent successfully', life: 3000 }))
			.catch(() => this.messageSvc.add({ severity: 'error', summary: 'Error', detail: 'Message was not sent correctly', life: 3000 }))
			.finally(() => this.contactForm.reset());
	}

	private initializeGoogleMap(): any {
		new google.maps.Map(this.mapContainer.nativeElement, {
			center: this.center,
			zoom: this.zoom,
		});
	}
}