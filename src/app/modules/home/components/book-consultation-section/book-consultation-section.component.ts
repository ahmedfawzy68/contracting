import { Component, Input } from '@angular/core';
import { HomeBookingSection } from 'src/app/core/interfaces/home';

@Component({
  selector: 'app-book-consultation-section',
  templateUrl: './book-consultation-section.component.html',
  styleUrls: ['./book-consultation-section.component.scss']
})
export class BookConsultationSectionComponent {
  @Input() home_booking_section!: HomeBookingSection;
  @Input() loading!: boolean;

}
