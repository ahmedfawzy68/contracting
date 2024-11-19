import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent {
  @Input() title: string = '';
  @Input() backgroundImage: string = '';

}
