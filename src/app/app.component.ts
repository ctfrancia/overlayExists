import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalServiceService } from './modal-service.service';
import { ModalController } from '@ionic/angular';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalService: ModalServiceService,
    private modalCtrl: ModalController,
  ) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.sub();
    });
  }

  private sub(): void {
    this.modalService.openModal$.subscribe(
      async (modalToOpen: string): Promise<void> => {
      if (modalToOpen === 'comp-1') {
        const comp1 = await this.modalCtrl.create({
          component: Component1Component,
        });
        await comp1.present();
      }

      if(modalToOpen === 'comp-2') {
        const comp2 = await this.modalCtrl.create({
          component: Component2Component,
        });

        await comp2.present();
      }
    })
  }
}
