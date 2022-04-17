import { Component, OnInit } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { IUser } from './models/user.model';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BasketService } from './services/basket.service';
import {IState} from "./store/reducers";
import {select, Store} from "@ngrx/store";
import {userFeatureSelector} from "./store/reducers/user.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  private readonly title = environment.applicationName;
  public readonly currencies: string[] = environment.config.supportedCurrencies;
  public user$!: Observable<IUser>;
  public basketSize$!: Observable<number>;

  constructor(
    private titleService: Title,
    private router: Router,
    private bsaketService: BasketService,
    private store: Store<IState>
  ) {
    const startMode = !environment.production ? ' DEV' : '';
    this.titleService.setTitle(this.title + startMode);
  }

  ngOnInit(): void {
    this.user$ = this.getUser$();
    this.basketSize$ = this.bsaketService.basket$.pipe(
      map((basket) => (basket ? basket.length : 0))
    );
  }

  public getUser$(): Observable<IUser> {
    return this.store.pipe(
      select(userFeatureSelector)
    );
    // return timer(2000).pipe(
    //   map(() => ({
    //     name: 'Chosen One',
    //     role: 'Guest',
    //     shopSum: {
    //       value: 0,
    //       defaultCurrency: 'RUR',
    //     },
    //   }))
    // );
  }

  onBasketClicked() {
    this.router.navigate([`basket`]);
  }
}
