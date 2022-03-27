import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IUser } from '../../models/user.model';

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

  public readonly applicationName: string = environment.applicationName;

  onHamburgerClicked() {
    console.log('hamburger');
  }

  onCartClicked() {
    console.log('cart');
  }
}
