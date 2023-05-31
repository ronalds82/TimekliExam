import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent {
  isResponsive = false;
  isDropdownOpen = false;

  toggleResponsive(): void {
    this.isResponsive = !this.isResponsive;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
