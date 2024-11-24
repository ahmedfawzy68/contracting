import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.scss']
})
export class CustomBtnComponent {
  @Input() btnName!: string | undefined;
  @Input() backgroundColor: string = '#5772e8';

}
