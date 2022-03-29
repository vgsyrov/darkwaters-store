import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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

  @Output()
  basketClicked = new EventEmitter<void>();

  public readonly applicationName: string = environment.applicationName;

  onHamburgerClicked() {
    console.log('hamburger');
  }

  onCartClicked() {
    this.basketClicked.emit();
  }
}
