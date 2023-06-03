import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent {
  isResponsive = false;
  isDropdownOpen = false;

  constructor(private translate: TranslateService) { }

  get isLatvianEnabled(): boolean {
    return this.translate.currentLang === 'lv';
  }

  get isEnglishEnabled(): boolean {
    return this.translate.currentLang === 'en';
  }

  toggleResponsive(): void {
    this.isResponsive = !this.isResponsive;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }
}
