import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PathNames } from '../../shared/constants/constants';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent {
  constructor(private router: Router) { }

  /**
   * Go to add user
   */
  public goToAddUser() {
    this.router.navigate([PathNames.ADD_USER]);
  }

  /**
   * Go to list user
   */
  public goToListUser() {
    this.router.navigate([PathNames.LIST_USER]);
  }
}
