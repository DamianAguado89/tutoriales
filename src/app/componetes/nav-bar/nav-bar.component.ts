import { Component, OnInit, ViewEncapsulation, AfterViewInit, Output, EventEmitter, HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  
  
  constructor(private router: Router,) { }
  
  ngOnInit(): void {
  }
  
  toggleNavbar(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }


}
