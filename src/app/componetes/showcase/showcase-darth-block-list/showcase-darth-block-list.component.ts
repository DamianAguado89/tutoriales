import { Component, OnInit } from '@angular/core';
import { DarthBlockItem } from '../../../../../projects/darth-library/src/components/darth-block-list/bean/darth-block-item';
import { Appointment } from './Appointment';
import { DarthAction } from '../../../../../projects/darth-library/src/common/darth-action';

@Component({
  selector: 'app-showcase-darth-block-list',
  templateUrl: './showcase-darth-block-list.component.html',
  styleUrls: ['./showcase-darth-block-list.component.scss']
})
export class ShowcaseDarthBlockListComponent implements OnInit {

  public blockItems: DarthBlockItem<Appointment>[]

  public CANCEL_APPOINTMENT: string = 'CANCEL_APPOINTMENT';
  public BEFORE_APPOINTMENT: string = 'BEFORE_APPOINTMENT';

  public pagination: number;

  constructor() {
    this.blockItems = [];
    this.pagination = 5;
  }

  ngOnInit() {

    let appointmets: Appointment[] = [
      {
        date: "2021-08-10",
        status: "complete",
        client: "Fernando",
        age: 27
      },
      {
        date: "2021-07-10",
        status: "canceled",
        client: "Nando",
        age: 30
      },
      {
        date: "2021-07-10",
        status: "in course",
        client: "Pepe",
        age: 30
      },
      {
        date: "2021-08-10",
        status: "unknown",
        client: "Alberto",
        age: 80
      },
      {
        date: "2021-09-10",
        status: "complete",
        client: "Jose",
        age: 27
      },
      {
        date: "2021-08-10",
        status: "cancelled",
        client: "Alfredo",
        age: 20
      }
    ];

    let actions: DarthAction<Appointment>[] = [
      {
        label: "Cancelar cita",
        value: this.CANCEL_APPOINTMENT
      },
      {
        label: "Ver citas anteriores",
        value: this.BEFORE_APPOINTMENT,
        icon: "bi bi-dice-1"
      }
    ];

    appointmets.forEach(ap => {
      let blockItem = new DarthBlockItem<Appointment>();

      blockItem.item = ap;

      switch (ap.status) {
        case 'complete':
          blockItem.borderColor = 'green';
          break;
        case 'canceled':
          blockItem.borderColor = 'red';
          break;
        case 'in course':
          blockItem.borderColor = 'blue';
          break;
        case 'unknown':
          blockItem.borderColor = 'grey';
          break;
      }

      if(blockItem.item.status !== 'in course'){
        blockItem.actions = actions.slice(1);
      }else{
        blockItem.actions = actions;
      }

      this.blockItems.push(blockItem);

    })

  }

  getAction(ev){
    console.log(ev);
  }

  selectItem(ev){
    console.log(ev);
  }

  addBlock() {

    let appointmets:Appointment[] = [{
      date: "2021-08-10",
      status: "complete",
      client: "Fernando",
      age: 27
    }]

    let actions: DarthAction<Appointment>[] = [
      {
        label: "Cancelar cita",
        value: this.CANCEL_APPOINTMENT
      },
      {
        label: "Ver citas anteriores",
        value: this.BEFORE_APPOINTMENT,
        icon: "bi bi-dice-1"
      }
    ];

    appointmets.forEach(ap => {
      let blockItem = new DarthBlockItem<Appointment>();

      blockItem.item = ap;

      switch (ap.status) {
        case 'complete':
          blockItem.borderColor = 'green';
          break;
        case 'canceled':
          blockItem.borderColor = 'red';
          break;
        case 'in course':
          blockItem.borderColor = 'blue';
          break;
        case 'unknown':
          blockItem.borderColor = 'grey';
          break;
      }

      if(blockItem.item.status !== 'in course'){
        blockItem.actions = actions.slice(1);
      }else{
        blockItem.actions = actions;
      }

      this.blockItems.push(blockItem);

    })
    
  }

  removeFirstBlock() {
    this.blockItems = this.blockItems.slice(1)
  }

  removeLastBlock() {
    this.blockItems = this.blockItems.slice(0, this.blockItems.length - 1)
  }

}
