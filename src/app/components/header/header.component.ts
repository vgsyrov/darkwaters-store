import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {IUser} from "../../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  // public user$ = new Observable<IUser>();

  @Input()
  public currencies!: string [];

  @Input()
  public user: IUser | null = null;

  public applicationName: string = environment.applicationName;

  constructor() { }

  ngOnInit(): void {
    //this.user$.subscribe(value => this.user = value);
  }

  onHamburgerClicked() {
    console.log('hamburger');
  }

  onCartClicked() {
    console.log('cart');
  }

}
