import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-block-card',
  templateUrl: './block-card.component.html',
  styleUrl: './block-card.component.css'
})
export class BlockCardComponent {
  @Input() title!: string;
  @Input() icon!:string;
  @Input() price!: string;
  @Input() number!: string;
  @Input() text!:string;

}
