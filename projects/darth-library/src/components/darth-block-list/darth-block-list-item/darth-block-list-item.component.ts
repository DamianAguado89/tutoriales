import { Component, Input, OnInit, Output, EventEmitter, TemplateRef, ViewEncapsulation } from '@angular/core';
import { DarthAction } from 'projects/darth-library/src/common/darth-action';
import { DarthBlockItem } from '../bean/darth-block-item';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'darth-block-list-item',
  templateUrl: './darth-block-list-item.component.html',
  styleUrls: ['./darth-block-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DarthBlockListItemComponent<T> implements OnInit {

  @Input() blockItem: DarthBlockItem<T>;
  @Input() id: string;

  @Input() showHeader: boolean = true;
  @Input() showInfoAdditional: boolean = true;
  @Input() showActions: boolean = true;
  @Input() showBorder: boolean = true;

  
  @Input() templateHeader: TemplateRef<any>;
  @Input() templateInfoAdditional: TemplateRef<any>;
  @Input() templateData: TemplateRef<any>;

  @Output() actionSelected: EventEmitter<DarthAction<T>>;
  @Output() closeOptions: EventEmitter<string>;

  public showOptions: boolean;

  constructor() {
    this.actionSelected = new EventEmitter<DarthAction<T>>();
    this.closeOptions = new EventEmitter<string>();
    this.showOptions = false;
   }

  ngOnInit() {
    this.showActions = this.showActions && this.blockItem.actions && this.blockItem.actions.length > 0;
  }

  openActions($event: MouseEvent){
    $event.stopPropagation();
    this.showOptions = true;
    this.closeOptions.emit(this.id)
  }

  sendAction($event: MouseEvent, action: DarthAction<T>, index){
    $event.stopPropagation();
    this.showOptions = false;
    let actionSended: DarthAction<T> = cloneDeep(action);
    actionSended.item = this.blockItem.item;
    actionSended.index = index;
    this.closeOptions.emit()
  }

  hideOptions(){
    this.showActions = false;
  }

}
