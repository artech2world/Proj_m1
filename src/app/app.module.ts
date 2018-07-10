import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from '../pages/login/login.module';
import { SignupModule } from '../pages/signup/signup.module';
import { TestPageModule } from '../pages/test/test.module';
import { WelcomeModule } from '../pages/welcome/welcome.module';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { TestPage } from '../pages/test/test';
import { Welcome } from '../pages/welcome/welcome';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    // Login,
    // Signup,
    // TestPage,
    // Welcome,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    LoginModule,
    SignupModule,
    TestPageModule,
    WelcomeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    // Login,
    // Signup,
    // TestPage,
    // Welcome,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
