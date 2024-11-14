import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {

  carouselSection = [
    {
      image: 'assets/imgs/slide1.png',
      title: 'شركة نواهل الإعمار للمقاولات',
      description: 'نحن في شركة نواهل وخبرتنا الواسعة في مجال المقاولات العامة نحن في شركة نواهل وخبرتنا الواسعة في مجال المقاولات العامة نحن في شركة نواهل وخبرتنا الواسعة في مجال المقاولات العامة'
    },
    {
      image: 'assets/imgs/slide2.png',
      title: 'شركة نواهل الإعمار للمقاولات',
      description: 'نحن في شركة نواهل وخبرتنا الواسعة في مجال المقاولات العامة نحن في شركة نواهل وخبرتنا الواسعة في مجال المقاولات العامة نحن في شركة نواهل وخبرتنا الواسعة في مجال المقاولات العامة'
    },
    {
      image: 'assets/imgs/slide3.png',
      title: 'شركة نواهل الإعمار للمقاولات',
      description: 'نحن في شركة نواهل وخبرتنا الواسعة في مجال المقاولات العامة نحن في شركة نواهل وخبرتنا الواسعة في مجال المقاولات العامة نحن في شركة نواهل وخبرتنا الواسعة في مجال المقاولات العامة'
    },

  ]

  constructor() {
    this.carouselTouch();
  }

  carouselTouch() {
    Carousel.prototype.onTouchMove = () => { };
  }

}
