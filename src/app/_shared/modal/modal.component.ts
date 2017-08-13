import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import {ModalService} from './modal.service';
import {EventManager} from '@angular/platform-browser';

@Component({
  selector: 'modal',
  template: `
    <div class="overlay overlay--lighter" (click)="onClickOutsideModal()">
      <!-- overlay-dialog--animate-->
      <div class="overlay-dialog overlay-dialog--signin2" (click)="cancelClick($event)">
       
        <div class="close-icon">
          <ng-content select="i"></ng-content>
        </div>
        
        <ng-container *ngIf="body; else projectContent">
          <ng-container *ngTemplateOutlet="body; context:context"></ng-container>
        </ng-container>
        
        <ng-template #projectContent>
          <ng-content></ng-content>
        </ng-template>

      </div>
    </div>
  `
})
export class ModalComponent implements OnInit {
  @Input()
  body: TemplateRef<any>;

  @Input()
  context: any;

  @Input()
  hideOnEsc = true;

  @Input()
  hideOnClickOutside = true;

  constructor(private modalService: ModalService,
              private eventManager: EventManager) { }

  ngOnInit() {
    this.eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
      if (this.hideOnEsc) {
        this.close();
      }
    });
  }
  onClickOutsideModal() {
    if (this.hideOnClickOutside) {
      this.close();
    }

  }

  close() {
    this.modalService.close();
  }


  cancelClick(evt: KeyboardEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }

}
