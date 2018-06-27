// Core Angular Packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


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
import { ComingSoonComponent } from './coming-soon/coming-soon/coming-soon.component';
import { BetaFormComponent } from './coming-soon/beta-form/beta-form.component';
import { EmailFormComponent } from './coming-soon/email-form/email-form.component';

// Custom Services
import { FirebaseService } from './shared/services/firebase.service';


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
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


// Angular firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

// 3rd party packages
import { ScrollToModule } from 'ng2-scroll-to';
import { BetaFormComponent } from './coming-soon/beta-form/beta-form.component';
import { EmailFormComponent } from './coming-soon/email-form/email-form.component';









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
    ComingSoonComponent,
    BetaFormComponent,
    EmailFormComponent
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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
