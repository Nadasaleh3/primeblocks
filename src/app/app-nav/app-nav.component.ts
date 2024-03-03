import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.css'
})
export class AppNavComponent  implements OnInit{

  private breakpointObserver = inject(BreakpointObserver);
  currentPageName!: string;

  constructor(private router: Router) {}
ngOnInit() {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.currentPageName = this.getPageName(this.router.url);
    }
  });
}

getPageName(url: string): string {
  // Logic to extract and format the page name from the URL
  // Replace this with your own logic
  return url; // Example: Just return the URL for now
}


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
