import { Injectable } from '@angular/core';
@Injectable()

export class InventoryService { 

    inventory:Array<any>;

    constructor() {
        this.inventory = [
            { 
                name: 'Aged Brie',
                quality: '',
                sellIn: ''
            },
            { 
                name: 'Sulfarus the Legendary Sword',
                quality: '',
                sellIn: ''
            },
            { 
                name: 'Backstage Pass',
                quality: '',
                sellIn: ''
            },
            { 
                name: 'Conjured Shield',
                quality: '',
                sellIn: ''
            },
            { 
                name: 'Regular Shield',
                quality: '',
                sellIn: ''
            }
        ]
        }

    getInventory() {
        return this.inventory;
    }

}