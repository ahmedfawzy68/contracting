import { Component, Input } from '@angular/core';
import { AboutUsData } from 'src/app/core/interfaces/about';

@Component({
  selector: 'app-why-qemmet-alrawasi-section',
  templateUrl: './why-qemmet-alrawasi-section.component.html',
  styleUrls: ['./why-qemmet-alrawasi-section.component.scss']
})
export class WhyQemmetAlrawasiSectionComponent {
  @Input() whyUs!: AboutUsData['data']['why_company_section']|null;
  @Input() loading!: boolean;

}
