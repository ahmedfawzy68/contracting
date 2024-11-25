import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/core/interfaces/services';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { ServicesService } from 'src/app/shared/services/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services!: Services['data'];
  loading: boolean = true;


  constructor(private _services: ServicesService, private _lang_: LanguageService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._lang_.language$.subscribe(() => {
      this.getServices();
    })
  }

  getServices() {
    this.loading = true;
    this._services.getServices().subscribe(res => {
      this.services = res.data;
      this.loading = false;
    })
  }
}
