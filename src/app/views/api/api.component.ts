import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {
  imageUrl: string = '';

  constructor(private http: HttpClient) {
    this.fetchImage();
  }

  fetchImage(): void {
    this.imageUrl = 'https://www.7timer.info/bin/astro.php?lon=-42.62&lat=-19.54&ac=0&lang=en&unit=metric&output=internal&tzshift=0';
  }
}
