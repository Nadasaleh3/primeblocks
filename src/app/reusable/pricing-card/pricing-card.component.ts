import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css'
})
export class PricingCardComponent {
  @Input() title!: string;
  @Input() desrption!: string;
  @Input() price!: string;
  @Input() features!: string[];
  @Input() borderColor!: string;
  @Input() buttonColor!: string;
  @Input() checkmarkColor!: string;

  buyNow() {
  window.open('https://www.primefaces.org/store/blocks.xhtml','_self') ;
  }
}

