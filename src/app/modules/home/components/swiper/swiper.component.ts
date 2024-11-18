import { Component, AfterViewInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements AfterViewInit {
  breakpoints = {
    1024: { slidesPerView: 4, spaceBetween: 30 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 1, spaceBetween: 10 },
  };
  swipers = [
    "https://nawahel.co/wp-content/uploads/2024/04/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%A8%D8%AF%D9%88%D9%86-%D8%B9%D9%86%D9%88%D8%A7%D9%86-2024-04-08T152820.375-1.png",
    "https://nawahel.co/wp-content/uploads/2024/03/1-12.png",
    "https://nawahel.co/wp-content/uploads/2024/03/2-2.png",
    "https://nawahel.co/wp-content/uploads/2024/03/5.png",
    "https://nawahel.co/wp-content/uploads/2024/03/4.png",
    "https://nawahel.co/wp-content/uploads/2024/03/3.png",
  ];

  ngAfterViewInit() {
    register();
  }
}
