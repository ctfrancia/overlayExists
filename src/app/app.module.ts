import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalServiceService } from './modal-service.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Component2Component } from './component2/component2.component';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [AppComponent, Component2Component, Component1Component],
  entryComponents: [Component1Component, Component2Component],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ModalServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
