// Core Angular Packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


// Custom Components
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BannerComponent } from './home/banner/banner.component';
import { SolutionComponent } from './home/solution/solution.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { FeaturesComponent } from './home/features/features.component';
import { AboutComponent } from './home/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';


// Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

// 3rd party packages
import { ScrollToModule } from 'ng2-scroll-to';
import { FormComponent } from './survey/form/form.component';
import { SurveyComponent } from './survey/survey/survey.component';






@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    HomeComponent,
    SolutionComponent,
    PricingComponent,
    FeaturesComponent,
    AboutComponent,
    FooterComponent,
    FormComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    ScrollToModule.forRoot(),
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
