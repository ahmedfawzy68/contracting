import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {

  servicesCards = [
    {
      title: 'بناء المباني السكنية والتجارية',
      image: 'assets/imgs/building6.jpg'
    },
    {
      title: 'إدارة المشاريع ',
      image: 'assets/imgs/about.jpg'
    },
    {
      title: 'تجديد وترميم المباني',
      image: 'assets/imgs/building8.jpg'
    },
    {
      title: 'إنشاء المنشآت الصناعية',
      image: 'assets/imgs/building5.jpg'
    },
    {
      title: 'إنشاء البنية التحتية',
      image: 'assets/imgs/building7.jpg'
    },
    {
      title: 'تطوير المشاريع العقارية',
      image: 'assets/imgs/building1.jpg'
    },
  ]

}
