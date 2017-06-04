import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Guard } from './services/auth/guard';
import { FirebaseService } from './services/firebase.service';
import { AppRoutingModule } from './app.routing.module'; 

import { AppComponent } from './pages/app/app.component';
import { LoginComponent } from './pages/user/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavmenuComponent } from './pages/shared/navmenu/navmenu.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

export const firebaseConfig = {
  apiKey: 'AIzaSyBeGxpiDkiIAASm8neB7E8IrfN_Zz8vbng',
  authDomain: 'gapp-def88.firebaseapp.com',
  databaseURL: 'https://gapp-def88.firebaseio.com',
  storageBucket: 'gs://gapp-def88.appspot.com',
//   messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        NavmenuComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MaterialModule,
        AppRoutingModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [Http]
            }
        }),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [Guard, FirebaseService]
})
export class AppModule {

}

//ng-bulid, for building dist folder
//firebase init, for creating firebase.json
//firebase serve, for local hosting
//firebase deploy, for deploying on real host 
