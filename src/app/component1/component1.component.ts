import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component implements OnInit {

  constructor(
    private modalService: ModalServiceService,
  ) { }

  ngOnInit() {}

  private openComponent2(): void {
    this.modalService.openComponent1();
  }

}
