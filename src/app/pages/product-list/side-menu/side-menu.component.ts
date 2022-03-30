import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  @Input()
  set categories(catList: string[]) {
    this.menuItems = catList.map((c: string) => {
      return {
        label: c,
        command: () => {
          this.onMenuClicked(c);
        },
      };
    });
  }

  @Output()
  selectedCategory = new EventEmitter<string>();

  menuItems: MenuItem[] = [];

  onMenuClicked(clickedMenu: string) {
    this.selectedCategory.emit(clickedMenu);
  }
}
