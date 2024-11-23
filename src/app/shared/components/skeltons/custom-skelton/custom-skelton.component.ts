import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-skelton',
  templateUrl: './custom-skelton.component.html',
  styleUrls: ['./custom-skelton.component.scss']
})
export class CustomSkeltonComponent {
  @Input() width = '';
  @Input() height = '';
  @Input() center!: string;

}
