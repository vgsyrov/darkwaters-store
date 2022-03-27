import { Component, OnInit } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { IUser } from './models/user.model';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  public readonly currencies: string[] = environment.config.supportedCurrencies;
  public user$!: Observable<IUser>;

  ngOnInit(): void {
    this.user$ = this.getUser$();
  }

  public getUser$(): Observable<IUser> {
    return timer(2000).pipe(
      map((a: number) => ({
        name: 'Chosen One',
        role: 'Guest',
        shopSum: {
          value: 1000,
          defaultCurrency: 'RUR',
        },
      }))
    );
  }
}
