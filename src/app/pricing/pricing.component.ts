
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})

export class PricingComponent implements OnInit {

  @Input() image!: string;
  constructor(private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 openExternalLink(){
  window.open('https://www.primefaces.org/blocks/licenses','_self')
 }
}