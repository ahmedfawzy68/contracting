import { Component, Input } from '@angular/core';
import { AboutUsSection } from 'src/app/core/interfaces/home';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent {
  @Input() about_us_section!: AboutUsSection;
  @Input() isBtn: boolean = false;

}
