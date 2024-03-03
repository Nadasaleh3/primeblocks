import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-block-header',
  templateUrl: './app-block-header.component.html',
  styleUrl: './app-block-header.component.css'
})
export class AppBlockHeaderComponent {
  @Input() title!: string;
}
