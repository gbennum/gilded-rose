import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'app/inventory/inventory.service';

@Component({
  selector: 'app-inventory',
  providers: [InventoryService],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

	componentName = 'Gilded Rose Inventory Page';
	inventory:Array<any>;

  constructor(private _inventoryService: InventoryService) {
    this.inventory = _inventoryService.getInventory();
    console.log(this.inventory);
  };

  populate() {
  	for (var i = 0; i < this.inventory.length; i++) {
  		// Random number troll: http://dilbert.com/strip/2001-10-25
  		// Or: https://xkcd.com/221/
  		// If you're feeling like testing with actual random numbers, just uncomment below

  		this.inventory[i].quality = 9;
  		// this.inventory[i].quality = Math.floor((Math.random() * 50) + 1);

  		// For the sake of sanity, I'm going to limit shelf life to a year
  		this.inventory[i].sellIn = 9;
  		// this.inventory[i].sellIn = Math.floor((Math.random() * 365) + 1);
  	}
  };
  
  increment() {
  	for (var i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].quality === '') {
        return;
      }
  		var item = this.inventory[i]
  		if (item.sellIn !== 0 && item.name !== 'Sulfarus the Legendary Sword') {
  			item.sellIn -= 1;
  		}
  		if(item.quality !== 0 && item.quality < 50) {
	  		switch(item.name) {
	  			case 'Aged Brie':
	  				item.quality += 1;
	  				break;
	  			case 'Sulfarus the Legendary Sword':
	  				break;
	  			case 'Backstage Pass':
	  				if (item.sellIn === 0) {
	  					item.quality = 0;
	  				}
	  				else if (item.sellIn <= 5) {
	  					item.quality += 3;
	  				}
	  				else if (item.sellIn <= 10) {
	  					item.quality += 2;
	  				}
	  				else {
	  					item.quality += 1;
	  				}
	  				break;
	  			case 'Conjured Shield':
	  				item.quality -= 2;
	  				break;
	  			default:
		  			item.quality -= 1;
		  	}
  		}
  		if (item.quality < 0) {
  			item.quality = 0;
  		}
  		if (item.quality > 50) {
  			item.quality = 50;
  		}
  	}
  };

}
