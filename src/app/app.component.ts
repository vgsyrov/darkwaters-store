import {Component, OnInit } from '@angular/core';
import {mapTo, Observable, timer} from "rxjs";
import {IUser} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  implements OnInit{

  public currencies: string[] = ['RUR', 'USD', 'EUR', 'CAP']

  constructor()
  { }

  ngOnInit(): void {

  }

  public getUser$(): Observable<IUser> {
    return timer(2000).pipe(
      mapTo( {
        name: 'Chosen One',
        role: 'Guest',
        shopSum:
          {
            value: 1000,
            defaultCurrency: 'RUR',
          },
      }),
    );
  }

}
