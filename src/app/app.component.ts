import { Component, OnInit } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { IUser } from './models/user.model';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  private readonly title = environment.applicationName;
  public readonly currencies: string[] = environment.config.supportedCurrencies;
  public user$!: Observable<IUser>;

  constructor(private titleService: Title, private router: Router) {
    const startMode = !environment.production ? ' DEV' : '';
    this.titleService.setTitle(this.title + startMode);
  }

  ngOnInit(): void {
    this.user$ = this.getUser$();
  }

  public getUser$(): Observable<IUser> {
    return timer(2000).pipe(
      map(() => ({
        name: 'Chosen One' + environment.production,
        role: 'Guest',
        shopSum: {
          value: 1000,
          defaultCurrency: 'RUR',
        },
      }))
    );
  }

  onBasketClicked() {
    this.router.navigate([`basket`]);
  }
}
