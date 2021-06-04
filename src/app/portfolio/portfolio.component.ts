import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  imgPath="assets/images/img";
  newSrc="";
  displayImg(img:HTMLImageElement,dis:HTMLDivElement)
  {
      dis.style.display="block";
      this.newSrc=img.src;




  }
  hideCard(card:HTMLDivElement)
  {
    card.style.display="none";
  }
  constructor() { }

  ngOnInit(): void {

  }

}
