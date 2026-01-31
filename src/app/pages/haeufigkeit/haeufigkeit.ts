import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    const arr = this.parsenumbers(this.numberInput);

    if (arr.length === 0) {
      this.result = 'Bitte Zahlen eingeben. zb: 1,2,3';
      return;
    }

    this.result = this.countOccurrences(arr).join('\n');
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

  countOccurrences(arr: number[]): string[] {
    const count: number[] = [];

    for (const x of arr) {
      // this only makes sense for whole numbers >= 0
      // If x can be 2.5 or -1, this counting-array approach breaks.
      count[x] = (count[x] || 0) + 1;
    }

    const result: string[] = [];
    for (let i = 0; i < count.length; i++) {
      if (count[i] > 0) {
        result.push(`${i} kommt ${count[i]} mal vor`);
      }
    }

    return result;
  }
}
