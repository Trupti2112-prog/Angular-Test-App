import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppConstants, PathNames } from './shared/constants/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = AppConstants.DEMO_APPLICATION;
  public isActive: boolean = false;
  public currentRoute: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = '/' + PathNames.HOME;
    // subscribed to router events to update isActive property
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((res: any) => {
      this.currentRoute = res.url;
    });
  }

  /**
   * Navigates to
   * 
   * @param route route
   */
  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

