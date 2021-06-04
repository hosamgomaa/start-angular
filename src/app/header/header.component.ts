import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
imgPath="assets/images/avataaars.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
