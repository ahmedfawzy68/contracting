import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {

  services:any = [
    {
      icon: "assets/imgs/construction-1.svg",
      title: "التخطيط والتصميم",
      background: "../../../../../assets/imgs/building1.jpg"
    },
    {
      icon: "assets/imgs/construction-1.svg",
      title: "التنفيذ وإدارة المشاريع",
      background: "../../../../../assets/imgs/building2.jpg"
    },
    {
      icon: "assets/imgs/construction-1.svg",
      title: "التخطيط والتصميم",
      background: "../../../../../assets/imgs/building3.jpg"
    },
    {
      icon: "assets/imgs/construction-1.svg",
      title: "التخطيط والتصميم",
      background: "../../../../../assets/imgs/building4.jpg"
    },
    {
      icon: "assets/imgs/construction-1.svg",
      title: "التخطيط والتصميم",
      background: "../../../../../assets/imgs/building5.jpg"
    },
    {
      icon: "assets/imgs/construction-1.svg",
      title: "التخطيط والتصميم",
      background: "../../../../../assets/imgs/building6.jpg"
    },
    {
      icon: "assets/imgs/construction-1.svg",
      title: "التخطيط والتصميم",
      background: "../../../../../assets/imgs/building7.jpg"
    },
    {
      icon: "assets/imgs/construction-1.svg",
      title: "التخطيط والتصميم",
      background: "../../../../../assets/imgs/building8.jpg"
    },
    {
      icon: "assets/imgs/construction-1.svg",
      title: "التخطيط والتصميم",
      background: "../../../../../assets/imgs/building9.jpg"
    },
  ]

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

  onHover(service:any){
    service.hoverStyle = {backgroundImage: `url(${service.background})`}
  }
  
  onLeave(service:any){
    service.hoverStyle = {}
  }

}
