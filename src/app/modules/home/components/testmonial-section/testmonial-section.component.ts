import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/core/interfaces/home';

@Component({
  selector: 'app-testmonial-section',
  templateUrl: './testmonial-section.component.html',
  styleUrls: ['./testmonial-section.component.scss']
})
export class TestmonialSectionComponent {

  @Input() testmonials!: Testimonial[];
  @Input() loading!: boolean;


}
