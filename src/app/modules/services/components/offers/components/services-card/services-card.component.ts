import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';

}
