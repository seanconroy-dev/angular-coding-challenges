import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { unique } from './duplikate-entfernen.util';
import { parseNumbers } from '../../shared/utils/number.util';

@Component({
  selector: 'app-duplikate-entfernen',
  imports: [RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './duplikate-entfernen.html',
  styleUrl: './duplikate-entfernen.scss',
})
export class DuplikateEntfernen {
  numberInput = '';
  result = '';

  calculateArraystats(): void {
    const arr = parseNumbers(this.numberInput);

    if (arr.length === 0) {
      this.result = 'Bitte Zahlen eingeben. zb: 1,2,2,3';
      return;
    }

    const uniqueValues = unique(arr);
    this.result = uniqueValues.join(', ');
  }
}