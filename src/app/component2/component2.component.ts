import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component implements OnInit {
  
  constructor(private modalService: ModalServiceService) { }

  ngOnInit() {}

  private openComponent1(): void {
    this.modalService.openComponent1();
  }

}
