import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nt-color-tag',
  template: `
    <svg height="32">
      <circle
        cx="18"
        cy="18"
        r="8"
        [attr.fill]="color" />
      <text x="32" y="23">{{ text }}</text>
    </svg>
  `,
  styleUrls: ['./color-tag.component.scss']
})
export class ColorTagComponent {
  @Input() color = '#000000';
  @Input() text = '';
}
