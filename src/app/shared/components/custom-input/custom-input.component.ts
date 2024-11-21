import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() isRequired: boolean = false;
  @Input() isInput: boolean = false;

}
