import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { config } from '../assets/dbdetails'

import { FirebaseProvider } from '../providers/firebase/firebase';
import { FavouriteServiceProvider } from '../providers/favourite-service/favourite-service';

import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      preloadModules:true
    }),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    IonicImageViewerModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    FavouriteServiceProvider,
   
  ]
})
export class AppModule {}
