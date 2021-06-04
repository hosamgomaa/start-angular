import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.css']

})
export class DecorationComponent implements OnInit {

  @Input() bgColor= "";

  constructor() {

  }


  ngOnInit(): void {
  
  }

}
