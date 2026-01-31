import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

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
    const arr = this.parsenumbers(this.numberInput);

    if (arr.length === 0) {
      this.result = 'Bitte Zahlen eingeben. zb: 1,2,2,3';
      return;
    }

    const uniqueValues = this.unique(arr);
    this.result = uniqueValues.join(', ');
  }


  unique(arr: number[]): number[] {
    // equivalent to: Set<Integer> seen = new LinkedHashSet<>();
    const seen = new Set<number>();

    // for (int x : arr)
    for (const x of arr) {
      seen.add(x);
    }

    // equivalent to: int[] result = new int[seen.size()];
    const result: number[] = [];

    // for (int x : seen)
    for (const x of seen) {
      result.push(x);
    }

    return result;
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