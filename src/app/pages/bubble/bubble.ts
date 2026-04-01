import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { bubbleSort } from './bubble.util';
import { parseNumbers } from '../../shared/utils/number.util';


@Component({
  selector: 'app-bubble',
  imports: [
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './bubble.html',
  styleUrl: './bubble.scss',
})
export class Bubble {
  numberInput = '';
  result = '';

  calculateArraystats(): void {
    const arr = parseNumbers(this.numberInput);

    if (arr.length === 0) {
      this.result = 'Bitte Zahlen eingeben. zb: 1,2,2,3';
      return;
    }

    this.result = bubbleSort(this.numberInput);
  }


}
