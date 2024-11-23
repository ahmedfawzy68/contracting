import { Component, Input } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ServicesSection } from 'src/app/core/interfaces/home';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {
  @Input() services_section!: ServicesSection;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ]

  constructor() {
    this.carouselTouch();
  }

  carouselTouch() {
    Carousel.prototype.onTouchMove = () => { };
  }

  onHover(service: any) {
    service.hoverStyle = { backgroundImage: `url(${service.background})` }
  }

  onLeave(service: any) {
    service.hoverStyle = {}
  }

}
