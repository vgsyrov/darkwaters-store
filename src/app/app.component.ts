import {Component, OnInit } from '@angular/core';
import {map, Observable, timer} from "rxjs";
import {IUser} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  implements OnInit{

  public currencies: string[] = ['RUR', 'USD', 'EUR', 'CAP']
  public user$!: Observable<IUser>;

  constructor()
  { }

  ngOnInit(): void {
    this.user$ = this.getUser$();
  }

  public getUser$(): Observable<IUser> {
    return timer(2000).pipe(
      map( (a: number) => { return {
        name: 'Chosen One',
        role: 'Guest',
        shopSum:
          {
            value: 1000,
            defaultCurrency: 'RUR',
          },
      }}),
    );
  }

}
