import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-table',
  templateUrl: 'table.html'
})
export class TablePage {

  people = [{name: 'Leo', avatar: 'logo.png'}, {name: 'Ingrycht', avatar: 'sunny.gif'}]
  clicks = 0;

  constructor(public navCtrl: NavController) {
    console.log('I have ' + this.people.length + ' people to show');
  }

  clickme(person) {
    console.log(person);
    this.clicks++;
  }

}
