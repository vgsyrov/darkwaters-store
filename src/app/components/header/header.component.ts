import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public applicationName: string = environment.applicationName;

  constructor() { }

  ngOnInit(): void {
  }

}
