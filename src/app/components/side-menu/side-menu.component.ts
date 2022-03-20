import {Component, Input, OnInit} from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  @Input()
  items: MenuItem[] = [];

  ngOnInit() {
  }

}
