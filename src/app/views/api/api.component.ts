import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {
  imageUrl: string = 'https://www.7timer.info/bin/astro.php?lon=-42.62&lat=-19.54&ac=0&lang=en&unit=metric&output=internal&tzshift=0';
  

  usdToBrl: number | null = null;
  eurToBrl: number | null = null;
  btcToBrl: number | null = null;
  errorMessage: string = '';

  constructor(private http: HttpClient) {

    this.getCurrencyRates();
  }

  getCurrencyRates(): void {
    this.http.get<any>('https://latest.currency-api.pages.dev/v1/currencies/usd.json')
      .subscribe({
        next: (data) => {

          if (data && data.usd && data.usd.brl) {
            this.usdToBrl = data.usd.brl;
          } else {
            this.errorMessage = 'Erro ao obter a cotação do USD.';
          }
        },
        error: (err) => {
          console.error('Erro na requisição USD:', err);
          this.errorMessage = 'Erro ao carregar a cotação do USD.';
        }
      });

    this.http.get<any>('https://latest.currency-api.pages.dev/v1/currencies/eur.json')
      .subscribe({
        next: (data) => {

          if (data && data.eur && data.eur.brl) {
            this.eurToBrl = data.eur.brl;
          } else {
            this.errorMessage = 'Erro ao obter a cotação do EUR.';
          }
        },
        error: (err) => {
          console.error('Erro na requisição EUR:', err);
          this.errorMessage = 'Erro ao carregar a cotação do EUR.';
        }
      });

      this.http.get<any>('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.json')
      .subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.btc && data.btc.brl) {
            console.log(data.btc.brl)
            this.btcToBrl = data.btc.brl;
          } else {
            this.errorMessage = 'Erro ao obter a cotação do BTC.';
          }
        },
        error: (err) => {
          console.error('Erro na requisição EUR:', err);
          this.errorMessage = 'Erro ao carregar a cotação do BTC.';
        }
      });
  }
}
