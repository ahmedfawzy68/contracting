import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent {

  formList = [
    {
      requierd: true,
      label: "contact-us.name",
      type: "text",
      isInput: true
    },
    {
      requierd: true,
      label: "contact-us.last-name",
      type: "text",
      isInput: true
    },
    {
      requierd: true,
      label: "contact-us.email",
      type: 'email',
      isInput: true
    },
    {
      requierd: true,
      label: "contact-us.subject",
      type: "text",
      isInput: true
    },
    {
      requierd: true,
      label: "contact-us.message",
      type: "text",
      isInput: false
    },
  ]

}
