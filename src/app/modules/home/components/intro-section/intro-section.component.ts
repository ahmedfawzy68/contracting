import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent {
  @Input() slug: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() button: boolean = true;

}
