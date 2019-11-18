import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  private openModalSubject: Subject<string> = new Subject<string>();
  public readonly openModal$: Observable<string> = this.openModalSubject.asObservable();

  constructor() { }

  public openComponent1(): void {
    console.log('here in comp1')
    this.close();
    this.openModalSubject.next('comp-1');
  }

  public openComponent2(): void {
    this.close();
    this.openModalSubject.next('comp-2');
  }

  public close(): void{
    this.openModalSubject.next('close');
  }
}
