import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {map, Observable} from 'rxjs';
import {BasketService} from "../services/basket.service";

@Injectable({
  providedIn: 'root',
})
export class BasketGuard implements CanActivate {

  constructor(private basketService: BasketService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.basketService.basket$.pipe(
      map(basket => basket.length > 0)
      );
  }
}
