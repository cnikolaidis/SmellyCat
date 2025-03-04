import { Injectable } from "@angular/core";
import emailjs from 'emailjs-com';

@Injectable({ providedIn: 'root' })
export class MailService {
    private static readonly API_KEY = 'TF4wDXg8CUoHkNZCu';
    private static readonly MAIL_SERVICE = 'mail_svc';
    private static readonly MAIL_TEMPLATE = 'mail_template';

    sendMail(params: any): Promise<any> {
        return emailjs.send(MailService.MAIL_SERVICE, MailService.MAIL_TEMPLATE, params, MailService.API_KEY);
    }
}