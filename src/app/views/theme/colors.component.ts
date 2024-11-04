import { Component } from '@angular/core';
import { CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-colors',
  templateUrl: 'colors.component.html',
  standalone: true,
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent]
})
export class ColorsComponent {}
