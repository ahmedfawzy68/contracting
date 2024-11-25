import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  mapUrl: SafeResourceUrl | null = null;
  isLoading = true;
  private destroy$ = new Subject<void>();

  constructor(private sanitizer: DomSanitizer, private _settings: SettingsService) { }

  ngOnInit(): void {
    this.getMapUrl();
  }

  getMapUrl() {
    this._settings.settings$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res?.map_iframe) {
            const urlMatch = res.map_iframe.match(/src="([^"]+)"/);
            const extractedUrl = urlMatch ? urlMatch[1] : res.map_iframe;
            this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(extractedUrl);
            this.isLoading = false;
          }
        },
        error: () => {
          this.isLoading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
