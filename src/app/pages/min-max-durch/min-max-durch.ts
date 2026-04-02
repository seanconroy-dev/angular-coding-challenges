import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { parseNumbers } from '../../shared/utils/number.util';
import { calculateArrayStats } from './min-max-durch.util';

@Component({
  selector: 'app-min-max-durch',
  imports: [
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './min-max-durch.html',
  styleUrl: './min-max-durch.scss',
})
export class MinMaxDurch {
  numberInput = '';
  result = '';

  calculateArraystats(): void {
    const arr = parseNumbers(this.numberInput);
    const stats = calculateArrayStats(arr);

    if (!stats) {
      this.result = 'Bitte Zahlen eingeben. zb: 1,2,3';
      return;
    }

    this.result =
      `min: ${stats.min}  durchschnitt: ${stats.average.toFixed(2)}  max: ${stats.max}`;
  }
}