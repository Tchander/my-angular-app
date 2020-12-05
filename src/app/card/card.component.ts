import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card
  @Input() index: number

  title = 'My Card Title'
  text: string = 'My sample text'

  cardDate: Date = new Date()

  textColor: string

  ngOnInit() {}

  changeTitle() {
    this.card.title = 'Title has been changed'
  }

  inputHandler(value) {
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }
}
