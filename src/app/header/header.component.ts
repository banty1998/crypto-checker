import { Component } from '@angular/core';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedCurrency : string = "INR";

  constructor(private currencyService: CurrencyService) {}

  sendCurrency(event: string){
    console.log(event);
    this.currencyService.setCurrency(event);
  }
}
