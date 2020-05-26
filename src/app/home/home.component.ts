import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  private routeLinks: any[];
  private activeLinkIndex = 0;
  private currentRoute = '';

  ngOnInit(): void {
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.routeLinks = [
      { label: 'Search', link: 'search' },
      { label: 'Newest', link: 'newest' },
      { label: 'Random', link: 'random' }
    ];
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url.slice(1);
        console.log(this.currentRoute);
        this.routeLinks.forEach((elm, index) => {
          if (elm.link === this.currentRoute) {
            this.activeLinkIndex = index;
          }
        });
      }
    });
  }

}
