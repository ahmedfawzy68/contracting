import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Settings } from 'src/app/core/interfaces/settings';
import { ContactService } from 'src/app/shared/services/contact/contact.service';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
  providers: [MessageService]
})
export class ContactUsFormComponent implements OnInit {
  contactForm: FormGroup;
  settings!: Settings['data'];
  formList = [
    {
      requierd: true,
      label: "contact-us.first_name",
      type: "text",
      isInput: true,
      formControlName: "first_name",
    },
    {
      requierd: true,
      label: "contact-us.last_name",
      type: "text",
      isInput: true,
      formControlName: "last_name",
    },
    {
      requierd: true,
      label: "contact-us.email",
      type: 'email',
      isInput: true,
      formControlName: "email",
    },
    {
      requierd: true,
      label: "contact-us.subject",
      type: "text",
      isInput: true,
      formControlName: "subject",
    },
    {
      requierd: true,
      label: "contact-us.message",
      type: "text",
      isInput: false,
      formControlName: "message",
    },
  ]
  loading: boolean = false;

  constructor(private _settings: SettingsService, private _fb: FormBuilder, private _contact: ContactService, private _toast: MessageService, private _translate: TranslateService) {
    this.contactForm = this._fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings() {
    this._settings.settings$.subscribe(res => {
      if (res) {
        this.settings = res;
      }
    });
  }

  submit(contactForm: FormGroup) {
    if (contactForm.valid) {
      this.loading = true;
      this._contact.contactUs(contactForm.value).subscribe({
        next: (res) => {
          this.loading = false;
          this._toast.add({ severity: 'success', summary: 'Success', detail: res.meta.message });
          this.contactForm.reset();
        },
        error: (err) => {
          this.loading = false;
          Object.values(err.error.meta.errors).forEach((error: any) => {
            this._toast.add({ severity: 'error', summary: this._translate.instant('ERROR'), detail: error[0] });
          });
        }
      })
    }
    else {
      this.validators(contactForm);
    }
  }

  validators(contactForm: FormGroup) {
    Object.keys(contactForm.controls).forEach(key => {
      const control = contactForm.get(key);
      if (control?.errors) {
        const fieldName = key;

        if (control.errors['required']) {
          this._toast.add({
            severity: 'error',
            summary: this._translate.instant('ERROR'),
            detail: this._translate.instant(`contact-us.${fieldName}`) + ' ' + this._translate.instant('VALIDATION.REQUIRED')
          });
        }

        if (control.errors['email']) {
          this._toast.add({
            severity: 'error',
            summary: this._translate.instant('ERROR'),
            detail: this._translate.instant('VALIDATION.EMAIL')
          });
        }
      }
    });
  }

}
