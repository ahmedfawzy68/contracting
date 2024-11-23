import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AboutUsSection, Goal, HomeBookingSection, Partner, ProjectsSection, ServicesSection, Slider, Testimonial, WhyUsSection } from 'src/app/core/interfaces/home';
import { HomeService } from 'src/app/shared/services/home/home.service';
import { LanguageService } from 'src/app/shared/services/language/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sliders!: Slider[];
  about_us_section!: AboutUsSection;
  why_us_section!: WhyUsSection;
  home_booking_section!: HomeBookingSection;
  services_section!: ServicesSection;
  goals_section!: Goal[];
  projects!: ProjectsSection;
  testimonials!: Testimonial[];
  partners!: Partner[];
  private langSub!: Subscription;
  loading: boolean = true;

  constructor(private _home: HomeService, private _lang: LanguageService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.langSub = this._lang.language$.subscribe(lang => {
      this.homePage();
    })
  }

  homePage() {
    this.loading = true;
    this._home.homePage().subscribe((res: any) => {
      if (res.status == 1) {
        this.sliders = res.data.sliders;
        this.about_us_section = res.data.about_us_section;
        this.why_us_section = res.data.why_us_section;
        this.home_booking_section = res.data.home_booking_section;
        this.services_section = res.data.services_section;
        this.goals_section = res.data.goals_section;
        this.projects = res.data.projects;
        this.testimonials = res.data.testimonials;
        this.partners = res.data.partners;
        this.loading = false;
      }
    })
  }

  ngOnDestroy() {
    this.langSub.unsubscribe();
  }

}
