import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-scroll-to-top-btn',
  templateUrl: './scroll-to-top-btn.component.html',
  styleUrls: ['./scroll-to-top-btn.component.scss'],
  animations: [
    trigger('scaleInOut', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('300ms ease-out', style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'scale(0)' }))
      ])
    ])
  ]
})
export class ScrollToTopBtnComponent {
  isVisible = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  @HostListener('window:scroll')
  checkScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isVisible = window.scrollY > 200;
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}
