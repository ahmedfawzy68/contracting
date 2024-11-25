import { Component, OnInit } from '@angular/core';
import { ProjectCategory } from 'src/app/core/interfaces/portfolio';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { PortfolioService } from 'src/app/shared/services/portfolio/portfolio.service';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.scss']
})
export class OurWorksComponent implements OnInit {

  projectsCategory!: ProjectCategory[];
  loading: boolean = true;

  constructor(private _portfolio: PortfolioService, private _lang: LanguageService) { }

  ngOnInit(): void {
    this._lang.language$.subscribe(() => {
      this.getProjects();
    })
  }

  getProjects() {
    this.loading = true;
    this._portfolio.getProjects().subscribe(res => {
      this.projectsCategory = res.data;
      this.loading = false;
    })
  }

}
