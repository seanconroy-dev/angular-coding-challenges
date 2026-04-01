import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { countOccurrences } from './haeufigkeit.util';
import { parseNumbers } from '../../shared/utils/number.util';

@Component({
  selector: 'app-haeufigkeit',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './haeufigkeit.html',
  styleUrl: './haeufigkeit.scss',
})
export class Haeufigkeit {
  numberInput = '';
  result = '';

  calculateArraystats(): void {
    const arr = parseNumbers(this.numberInput);

    if (arr.length === 0) {
      this.result = 'Bitte Zahlen eingeben. zb: 1,2,3';
      return;
    }

    this.result = countOccurrences(arr).join('\n');
  }

 
}
