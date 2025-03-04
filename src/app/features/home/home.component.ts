import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailService } from '../../shared/mail.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { UntilDestroy } from '@ngneat/until-destroy';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { Component, inject } from '@angular/core';
import { ImageModule } from 'primeng/image';

@UntilDestroy()
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	standalone: true,
	imports: [
		ImageModule,
		TextareaModule,
		InputTextModule,

		ReactiveFormsModule,

		GoogleMapsModule
	]
})
export class HomeComponent {
	contactForm!: FormGroup;
	center: google.maps.LatLngLiteral = { lat: 40.6343, lng: 22.9430 };
	zoom = 14;

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

	submitForm() {
		const mailParams = {
			receiver: 'Smelly Cat',
			fullName: this.contactForm.get('fullName')?.value,
			city: this.contactForm.get('city')?.value,
			address: this.contactForm.get('address')?.value,
			postalCode: this.contactForm.get('postalCode')?.value,
			message: this.contactForm.get('message')?.value,
			email: this.contactForm.get('email')?.value
		};
		this.mailSvc.sendMail(mailParams);
	}
}