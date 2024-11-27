import { Component, Input } from '@angular/core';
import { WhyUsSection } from 'src/app/core/interfaces/home';

@Component({
  selector: 'app-why-us-section',
  templateUrl: './why-us-section.component.html',
  styleUrls: ['./why-us-section.component.scss']
})
export class WhyUsSectionComponent {
  @Input() whyUsSection!: WhyUsSection;
  @Input() loading!: boolean;

}