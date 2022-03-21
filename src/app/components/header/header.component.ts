import {Component, Input, OnInit} from '@angular/core';
import { environment } from '../../../environments/environment';
import {IUser} from "../../models/user.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input()
  public user$ = new Observable<IUser>();

  @Input()
  public currencies!: string [];

  public user: IUser | null = null;

  public applicationName: string = environment.applicationName;

  constructor() { }

  ngOnInit(): void {
    this.user$.subscribe(value => this.user = value);
  }

  onGamburgerClicked() {
    console.log('gamburger');
  }

  onCartClicked() {
    console.log('cart');
  }

}
