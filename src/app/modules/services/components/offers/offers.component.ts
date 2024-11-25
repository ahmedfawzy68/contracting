import { Component, Input } from '@angular/core';
import { Services } from 'src/app/core/interfaces/services';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {

  @Input() servicesSection!: Services['data']['services_section'] | null;
  @Input() loading!: boolean;


}
