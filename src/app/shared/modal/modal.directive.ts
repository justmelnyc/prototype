import {
  AfterContentInit,
  ContentChild,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  OnDestroy
} from '@angular/core';
import {ModalComponent} from './modal.component';
import {ModalService} from './modal.service';

@Directive({
  selector: '[ModalOpenOnClick]'
})
export class ModalOpenDirective implements OnInit, OnDestroy {
  clickHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);

  routeHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);

  elements: HTMLBaseElement[];

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.modalService.close$.subscribe(() => this.viewContainer.clear());
  }

  ngOnDestroy() {
    this.elements.forEach(el => el.removeEventListener('click', this.clickHandler));
  }


  @Input()
  set ModalOpenOnClick(els) {

    if (els.length) {
      this.elements = els;
    } else {
      this.elements = [els];
    }

    this.elements.forEach(el => el.addEventListener('click', this.clickHandler));
  }
}









