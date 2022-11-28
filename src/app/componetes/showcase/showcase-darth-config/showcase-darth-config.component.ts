import { Component, OnInit } from '@angular/core';
import { DarthConfigService } from '../../../../../projects/darth-library/src/services/darth-config/darth-config.service';

@Component({
  selector: 'app-showcase-darth-config',
  templateUrl: './showcase-darth-config.component.html',
  styleUrls: ['./showcase-darth-config.component.scss']
})
export class ShowcaseDarthConfigComponent implements OnInit {

  constructor(private darthConfig: DarthConfigService) {
    console.log(this.darthConfig.gerAllData());
    console.log(this.darthConfig.getData('variable2'));
   }

  ngOnInit() {
  }

}
