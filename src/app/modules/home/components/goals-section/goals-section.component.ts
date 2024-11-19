import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-goals-section',
  templateUrl: './goals-section.component.html',
  styleUrls: ['./goals-section.component.scss'],
})
export class GoalsSectionComponent {
  slides = [
    { title: 'رؤيتنا', content: 'نسعى لأن نكون الشركة الرائدة والمرجعية في مجال المقاولات العامة، من خلال تقديم حلول مبتكرة وجودة عالية في جميع مشاريعنا.', bg: "assets/imgs/building4.jpg" },
    { title: 'رسالتنا', content: 'تتمثل رسالتنا في تحقيق رضا العملاء من خلال تقديم خدمات ممتازة، والالتزام بالجودة، والابتكار، والموثوقية في تنفيذ المشاريع،', bg: "assets/imgs/building5.jpg" },
    { title: 'أهدافنا', content: 'هدف إلى تحقيق النجاح المستدام والنمو المستمر من خلال تنفيذ مشاريع ذات جودة عالية، وتحقيق رضا العملاء، وتطوير قدراتنا', bg: "assets/imgs/building6.jpg" }
  ];
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
