import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us-section',
  templateUrl: './why-choose-us-section.component.html',
  styleUrls: ['./why-choose-us-section.component.scss']
})
export class WhyChooseUsSectionComponent {

  whyUsCards = [
    {
      title: 'رؤيتنا',
      description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
      icon: 'assets/imgs/eye.png',
      overLayerColor: 'var(--secondary-color)',
      backgroundImage: 'assets/imgs/building4.jpg',
    },
    {
      title: 'رسالتنا',
      description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
      icon: 'assets/imgs/email.png',
      overLayerColor: 'var(--primary-color)',
      backgroundImage: 'assets/imgs/building2.jpg',
    },
    {
      title: 'أهدافنا',
      description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
      icon: 'assets/imgs/flag.png',
      overLayerColor: '#fff',
      backgroundImage: 'assets/imgs/building3.jpg',
      color: '#000'
    },

  ]

}
