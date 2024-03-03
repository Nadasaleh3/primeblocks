import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private router:Router){}
  @Input() title!: string;
  @Input() image!: string;
  @Input() numberofblocks!: string;
  @Input() blockDetailsPage!:string;

  showCard() {
    if(this.blockDetailsPage)
    {
      this.router.navigateByUrl(this.blockDetailsPage)
    }

    
    }
}

