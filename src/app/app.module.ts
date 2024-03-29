import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LightboxModule } from 'ngx-lightbox';

import {
  AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { ShippingComponent } from './shipping/shipping.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ResumeProfileComponent } from './my-resume/resume-profile/resume-profile.component';
import { ResumeWorkExperienceComponent } from './my-resume/resume-work-experience/resume-work-experience.component';
import { ResumeEducationComponent } from './my-resume/resume-education/resume-education.component';
import { ResumeFooterComponent } from './my-resume/resume-footer/resume-footer.component';
import { FngAccordionComponent } from './fng-accordion/fng-accordion.component';
import { PortfolioLightboxComponent } from './portfolio-lightbox/portfolio-lightbox.component';
import { BeautifulEarthComponent } from './beautiful-earth/beautiful-earth.component';
import { NerdsPreferredComponent } from './nerds-preferred/nerds-preferred.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    LightboxModule,
    HttpClientModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    OffcanvasModule.forRoot(),
    
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
       { path: 'graphic-design', component: GraphicDesignComponent },
      { path: 'my-resume', component: MyResumeComponent },
      { path: 'beautiful-earth', component: BeautifulEarthComponent },
      { path: 'nerds-preferred', component: NerdsPreferredComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    GraphicDesignComponent,
    MyResumeComponent,
    ResumeEducationComponent,
    ResumeFooterComponent,
    ResumeProfileComponent,
    ResumeWorkExperienceComponent,
    FngAccordionComponent,
    PortfolioLightboxComponent,
    BeautifulEarthComponent,
    NerdsPreferredComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/