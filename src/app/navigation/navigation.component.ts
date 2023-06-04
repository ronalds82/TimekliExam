import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent {
  isResponsive = false;
  isDropdownOpen = false;
  currentLanguage = 'lv';

  constructor(private translate: TranslateService,
    private router: Router) { }

  get isLatvianEnabled(): boolean {
    return this.currentLanguage === 'lv';
  }

  get isEnglishEnabled(): boolean {
    return this.currentLanguage === 'en';
  }

  get isDropdownLinkSelected(): boolean {
    return this.router.url === '/sabiedriskais' ||
      this.router.url === '/automasina' ||
      this.router.url === '/ar-kajam' ||
      this.router.url === '/alternativas';
  }

  toggleResponsive(): void {
    this.isResponsive = !this.isResponsive;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
