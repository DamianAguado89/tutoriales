import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, ContentChild, TemplateRef } from '@angular/core';
import { DarthSelectItem } from '../../common/darth-select-item';

@Component({
  selector: 'darth-dropdown',
  templateUrl: './darth-dropdown.component.html',
  styleUrls: ['./darth-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in'))
    ])
  ]
})
export class DarthDropdownComponent implements OnInit {

  @Input() options: DarthSelectItem[] = [];
  @Input() valueSelect: any;
  @Input() labelNoResults: string = 'No results';

  @Output() select: EventEmitter<DarthSelectItem>;

  @ContentChild(TemplateRef, {static: false}) template: TemplateRef<any>;

  public showItems: boolean;
  public optionsShow: DarthSelectItem[];
  public valueShow:string;

  constructor() { 
    this.showItems = false;
    this.select = new EventEmitter<DarthSelectItem>();
  }

  ngOnInit() {
    if(this.valueSelect){
      this.preload();
    }
    this.optionsShow = this.options.slice(0);
  }

  preload(){
    let optionFound = this.options.find(option => option.value === this.valueSelect);
    if(optionFound){
      console.log(this.valueSelect)
      this.valueShow = optionFound.label;
      this.selectItem(optionFound);
    }
  }

  showPanelOptions(){
    this.showItems = !this.showItems;
  }

  filter(searchWord: string){
    this.optionsShow = this.options.filter(option => option.label.toLowerCase().includes(searchWord.toLowerCase()));
  }

  selectItem(item:DarthSelectItem){
    console.log(item)
    this.showItems = false;
    console.log(item);
    this.valueShow = item.label;
    this.select.emit(item);
  }

  hidePanelItems(){
    this.showItems = false;
  }

}
