import { Component, Input } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { Slider } from 'src/app/core/interfaces/home';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  @Input() carouselSection!: Slider[];
  @Input() loading!: boolean;


  constructor() {
    this.carouselTouch();
  }

  carouselTouch() {
    Carousel.prototype.onTouchMove = () => { };
  }

}
