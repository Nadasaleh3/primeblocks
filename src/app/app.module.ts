import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { CardComponent } from './reusable/card/card.component';
import { PricingComponent } from './pricing/pricing.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PricingCardComponent } from './reusable/pricing-card/pricing-card.component';
import {MatCardModule} from '@angular/material/card';
import { BlockContainerComponent } from './block-components/block-container/block-container.component';
import { MatBadgeModule } from '@angular/material/badge';
import { QuestionCardComponent } from './reusable/question-card/question-card.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppBlockHeaderComponent } from './block-components/app-block-header/app-block-header.component';
import { AppBlockSidebarComponent } from './block-components/app-block-sidebar/app-block-sidebar.component';
import { AppBlockBodyHeaderComponent } from './block-components/app-block-body-header/app-block-body-header.component';

import { AppBlockBodyComponent } from './block-components/app-block-body/app-block-body.component';
import { AppBlockSearchComponent } from './block-components/app-block-search/app-block-search.component';
import { BlockBodyContentComponent } from './block-components/block-body-content/block-body-content.component';
import { BlockCardComponent } from './block-components/block-card/block-card.component';
import { ReusableContainerComponent } from './reusable/reusable-container/reusable-container.component';
import { SettingComponent } from './setting/setting.component';
import { SettingButtonComponent } from './reusable/setting-button/setting-button.component';
import { BackgroundComponent } from './reusable/background/background.component';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './bloxk-ui/samples/dashboard/dashboard.component';


 



@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    DocumentationComponent,
    CardComponent,
    PricingComponent,
    AppNavComponent,
    PricingCardComponent,
    BlockContainerComponent,
    QuestionCardComponent,
    AppBlockHeaderComponent,
    AppBlockSidebarComponent,
    AppBlockBodyHeaderComponent,
    AppBlockBodyComponent,
    AppBlockSearchComponent,
    BlockBodyContentComponent,
    BlockCardComponent,
    ReusableContainerComponent,
    SettingComponent,
    SettingButtonComponent,
    BackgroundComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatMenuModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
