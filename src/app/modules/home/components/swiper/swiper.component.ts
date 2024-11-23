import { Component, AfterViewInit, Input } from '@angular/core';
import { Partner } from 'src/app/core/interfaces/home';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements AfterViewInit {
  @Input() swipers!: Partner[];
  
  breakpoints = {
    1024: { slidesPerView: 4, spaceBetween: 30 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 1, spaceBetween: 10 },
  };

  ngAfterViewInit() {
    register();
  }
}
