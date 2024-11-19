import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-why-us-card',
  templateUrl: './why-us-card.component.html',
  styleUrls: ['./why-us-card.component.scss']
})
export class WhyUsCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() overLayerColor: string = '';
  @Input() backgroundImage: string = '';
  @Input() color: string = '';

}
