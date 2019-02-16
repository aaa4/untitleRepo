import { Component, OnInit } from '@angular/core';
import {Greeting} from '../greeting';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  greet: Greeting = {
    id: 0,
    destination: 'J.F. Ivanov',
    text: 'hello there, how r u'
  };
  constructor() { }

  ngOnInit() {
  }

}
