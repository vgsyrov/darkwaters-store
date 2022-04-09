import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { environment } from '../../../environments/environment';
import { IUser } from '../../models/user.model';
import { Router } from '@angular/router';
import {Observable, of} from "rxjs";

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

  @Input()
  public basketSize: number | null = 0;

  @Output()
  basketClicked = new EventEmitter<void>();



  public readonly applicationName: string = environment.applicationName;

  constructor(private router: Router) {}

  onHamburgerClicked() {
    this.router.navigate([``]);
  }

  onCartClicked() {
    this.basketClicked.emit();
  }

  getBasketSize(): number {
    if (this.basketSize) {
      return this.basketSize;
    }
    return 0;
  }
}
