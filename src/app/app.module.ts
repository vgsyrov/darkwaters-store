import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import { TranslatePipe } from './pipes/translate.pipe';
import {TieredMenuModule} from "primeng/tieredmenu";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ProductCardFullComponent } from './components/product-card-full/product-card-full.component';
import { DataViewComponent } from './components/data-view/data-view.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CarouselDirective } from './directives/carousel.directive';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {RouterModule} from "@angular/router";
import { ListPageComponent } from './pages/list-page/list-page/list-page.component';
import {ProductService} from "./services/product.service";
import {CarouselModule} from "primeng/carousel";
import {TabViewModule} from "primeng/tabview";
import {UrlBaseInterceptor} from "./services/url-base.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyPipe,
    ProductCardFullComponent,
    DataViewComponent,
    TranslatePipe,
    SideMenuComponent,
    CarouselDirective,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    DataViewModule,
    RatingModule,
    HttpClientModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    RippleModule,

    RatingModule,
    FormsModule,
    TieredMenuModule,
    ProgressSpinnerModule,
    CarouselModule,
    TabViewModule
  ],
  providers: [
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlBaseInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
