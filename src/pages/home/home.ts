import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  logout(){
    //Api Token Logout 
    const root = this.app.getRootNav();
    root.popToRoot();

  }

  test(){
    this.navCtrl.push(TestPage, {}, {animate:false});

  }

}
