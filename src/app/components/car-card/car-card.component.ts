import { Component, Input } from '@angular/core';
import { Car } from '../../interfaces';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent {
  @Input() car: Car;
}
