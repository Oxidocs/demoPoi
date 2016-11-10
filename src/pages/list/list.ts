import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  places: string[];
  pictures: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.places = ['Collawara | Andacollo', 'Tololo | Valle del elqui', 'Mamalluca | Valle del elqui'];

    this.pictures = ['collawara.jpg', 'tololo.jpg', 'mamalluca.jpg'];


    this.items = [];
    for(let i = 0; i < 3; i++) {
      this.items.push({
        title: 'Ruta Astronómica',
        note: this.places[i],
        icon: this.pictures[i],
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
