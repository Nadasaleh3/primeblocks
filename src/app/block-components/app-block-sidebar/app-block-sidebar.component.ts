import { Component } from '@angular/core';

@Component({
  selector: 'app-app-block-sidebar',
  templateUrl: './app-block-sidebar.component.html',
  styleUrl: './app-block-sidebar.component.css'
})
export class AppBlockSidebarComponent {
  showOption1 :boolean=true;
  showOption2 :boolean=true;
  toggleOption1() {
    this.showOption1=!this.showOption1;
  }
  toggleOption2() {
    this.showOption2=!this.showOption2;
  }
}
