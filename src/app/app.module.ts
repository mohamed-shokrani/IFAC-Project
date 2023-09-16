import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { FinanceDetailsComponent } from './finance-details/finance-details.component';
import { GetFinancDetailsComponent } from './get-financ-details/get-financ-details.component';
import { AboutUsRoutingModule } from './about-us/about-us-routing.module';
import { FinanceDetailsRoutingModule } from './finance-details/finance-details-routing.module';
import { MainLayoutRoutingModule } from './main-layout/main-layout-routing.module';
import { CarouselRoutingModule } from './carousel/carousel-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    ContactUsComponent,
    ServiceDetailsComponent,
    GetFinancDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutUsRoutingModule,
    FinanceDetailsRoutingModule,
    MainLayoutRoutingModule,
    CarouselRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
