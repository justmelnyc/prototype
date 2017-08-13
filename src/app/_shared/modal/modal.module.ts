import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {ModalService} from './modal.service';
import { ModalOpenDirective } from './modal.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalComponent, ModalOpenDirective],
  exports: [ModalComponent, ModalOpenDirective]
})
export class ModalModule {
  static forRoot():  ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [ModalService]
    };
  }
}
