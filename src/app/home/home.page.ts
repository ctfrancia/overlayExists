import { Component } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalService: ModalServiceService) {}

  private openComponent1(): void {
    this.modalService.openComponent1();
  }

}
