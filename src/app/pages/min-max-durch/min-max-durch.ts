import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    // Scanner.nextLine()
    const arr = this.parsenumbers(this.numberInput);

    if (arr.length === 0) {
      this.result = 'Bitte Zahlen eingeben. zb: 1,2,3';
      return;
    }

    // min/max init
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    // for-each loop (same as Java)
    for (const i of arr) {
      if (i < min) min = i;
      if (i > max) max = i;
      sum += i;
    }

    const average = sum / arr.length;

    // printf equivalent
    this.result =
      `min: ${min}  durchschnitt: ${average.toFixed(2)}  max: ${max}`;
  }
  parsenumbers(input: string): number[] {
    //  THIS IS THE INITIALIZATION 
    const arr: number[] = [];

    const parts = input.split(',');

    for (let i = 0; i < parts.length; i++) {
      const value = Number(parts[i].trim());
      if (!isNaN(value)) {
        arr.push(value);
      }
    }

    return arr;
  }

}





