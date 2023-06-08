import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.less']
})
export class LinkButtonComponent {
  @Input() isReverse!: boolean;
  @Input() url!: string;
}
