import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


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
    const arr = this.parsenumbers(this.numberInput);

    if (arr.length === 0) {
      this.result = 'Bitte Zahlen eingeben. zb: 1,2,2,3';
      return;
    }

    this.result = this.bubbleSort(this.numberInput);
  }

  bubbleSort(input: string): string {
    let a: number[] = input.split(',').map(Number);
    let swapped = true;

    while (swapped) {
      swapped = false;

      for (let j = 0; j < a.length - 1; j++) {
        if (a[j] > a[j + 1]) {
          let temp = a[j];
          a[j] = a[j + 1];
          a[j + 1] = temp;
          swapped = true;
        }
      }
    }

    return a.join(', ');
  }

  parsenumbers(input: string): number[] {
    const arr: number[] = [];
    const parts = input.split(',');

    for (let i = 0; i < parts.length; i++) {
      const value = Number(parts[i].trim());
      if (!isNaN(value)) arr.push(value);
    }

    return arr;
  }
}
