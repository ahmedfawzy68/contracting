import { Component, Input } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { Goal } from 'src/app/core/interfaces/home';

@Component({
  selector: 'app-goals-section',
  templateUrl: './goals-section.component.html',
  styleUrls: ['./goals-section.component.scss'],
})
export class GoalsSectionComponent {

  @Input() goals_section!: Goal[];
  activeIndex = 0;

  onPageChange(event: any) {
    this.activeIndex = event.page ?? event;
  }

  constructor() {
    this.carouselTouch();
  }

  carouselTouch() {
    Carousel.prototype.onTouchMove = () => { };
  }
}
