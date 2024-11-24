import { Component, Input } from '@angular/core';
import { ProjectsSection } from 'src/app/core/interfaces/home';

@Component({
  selector: 'app-our-projects-section',
  templateUrl: './our-projects-section.component.html',
  styleUrls: ['./our-projects-section.component.scss']
})
export class OurProjectsSectionComponent {
  @Input() projects!: ProjectsSection;
  @Input() loading!: boolean;

}
