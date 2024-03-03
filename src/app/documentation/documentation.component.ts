import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export class DocumentationComponent {
  // @Input() openPage!:string;

  OpenPage(word:string) {

  if (word==='first'){
    window.open('https://primeflex.org/','_self')
  } else if (word==='second'){
    window.open('https://primeng.org/colors','_self')
  }

    
    }


    

}
