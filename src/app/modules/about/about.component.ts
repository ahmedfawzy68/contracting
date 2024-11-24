import { Component, OnInit, OnDestroy } from '@angular/core';
import { AboutUsData } from 'src/app/core/interfaces/about';
import { AboutService } from 'src/app/shared/services/about/about.service';
import { LanguageService } from 'src/app/shared/services/language/language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  aboutUsPage!: AboutUsData['data'];
  loading: boolean = true;
  private destroy$ = new Subject<void>();
  listOverLayers = ["var(--primary-color)", "var(--secondary-color)", "var(--forth-color)",];

  constructor(private _about: AboutService, private _lang: LanguageService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._lang.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getAboutUs();
      });
  }

  getAboutUs(): void {
    this.loading = true;
    this._about.getAbout()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.aboutUsPage = res.data;
          this.aboutUsPage.why_choose_us_section.items.map((item, index) => {
            item.overLayerColor = this.listOverLayers[index]
          });
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}