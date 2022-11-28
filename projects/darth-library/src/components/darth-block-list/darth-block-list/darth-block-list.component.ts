import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, ContentChild, TemplateRef, ViewChildren, QueryList } from '@angular/core';
import { DarthAction } from 'projects/darth-library/src/common/darth-action';
import { DarthBlockItem } from '../bean/darth-block-item';
import { DarthConstansService } from '../../../services/darth-constans.service';
import { DarthBlockListItemComponent } from '../darth-block-list-item/darth-block-list-item.component';

@Component({
  selector: 'darth-block-list',
  templateUrl: './darth-block-list.component.html',
  styleUrls: ['./darth-block-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DarthBlockListComponent<T> implements OnInit {

  @Input() blockItems: DarthBlockItem<T>[];
  @Input() labelNoResults: string= 'No results';

  @Input() showHeader: boolean = true;
  @Input() showInfoAdditional: boolean = true;
  @Input() showActions: boolean = true;
  @Input() showBorder: boolean = true;

  @Input() pagination: any = this.constants.DarthBlockListConstants.PAGINATION_DEFAULT;
  @Input() previousLabel: string = 'Previuos';
  @Input() nextLabel: string = 'Next';

  @Output() itemSelected: EventEmitter<T>;
  @Output() actionSelected: EventEmitter<DarthAction<T>>;

  @ContentChild("templateHeader", {static: false}) templateHeader: TemplateRef<any>;
  @ContentChild("templateInfoAdditional", {static: false}) templateInfoAdditional: TemplateRef<any>;
  @ContentChild("templateData", {static: false}) templateData: TemplateRef<any>;

  public page: number;

  @ViewChildren(DarthBlockListItemComponent) blocks: QueryList<DarthBlockListItemComponent<T>>;

  constructor(
    private constants: DarthConstansService
  ) {
    this.page = 1;
    this.itemSelected = new EventEmitter<T>();
    this.actionSelected = new EventEmitter<DarthAction<T>>();
   }

  ngOnInit() {
    if(this.pagination < 0){
      this.pagination = this.constants.DarthBlockListConstants.PAGINATION_DEFAULT;
    }
  }

  sendAction($event: DarthAction<T>){
    this.actionSelected.emit($event);
  }

  selectItem(blockItem: DarthBlockItem<T>){
    this.itemSelected.emit(blockItem.item);
  }

  closeAllOptionsExcept(id: string){
    this.blocks.forEach(block => {
      if(block.id !== id){
        block.showActions = false;
      }
    });
  }

}
