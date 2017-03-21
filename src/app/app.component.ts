import { Component } from '@angular/core';
import { InventoryComponent } from 'app/inventory/inventory.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  entryComponents: [InventoryComponent],
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app works!';
}