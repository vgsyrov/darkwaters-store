import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { environment } from '../../../environments/environment';
import { IUser } from '../../models/user.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input()
  public currencies!: string[];

  @Input()
  public user: IUser | null = null;

  @Output()
  basketClicked = new EventEmitter<void>();

  public readonly applicationName: string = environment.applicationName;

  constructor(private router: Router) { }

  onHamburgerClicked() {
    this.router.navigate([``]);
  }

  onCartClicked() {
    this.basketClicked.emit();
  }
}
