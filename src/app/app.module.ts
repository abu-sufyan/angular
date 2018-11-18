import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'tailobill'),
        AngularFireDatabaseModule,
        MDBBootstrapModule.forRoot(),
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([AppEffects])
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
