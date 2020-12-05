import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  title = 'My Card Title'
  text: string = 'My sample text'

  textColor: string

  ngOnInit() {}

  changeTitle() {
    this.title = 'Title has been changed'
  }

  inputHandler(value) {
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }
}
