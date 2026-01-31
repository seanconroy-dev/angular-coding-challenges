// wochentag.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

type Weekday = {
  value: number;
  label: string;
};

@Component({
  standalone: true,
  selector: 'app-wochentag',
  imports: [
    FormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './wochentag.html',
  styleUrl: './wochentag.scss',
})
export class Wochentag {
  tag: number | null = null;

  // For UX: show error/result states cleanly
  result = '';
  isError = false;

  // Clear structure instead of nested ternary
  private readonly tage: Record<number, string> = {
    1: 'Montag',
    2: 'Dienstag',
    3: 'Mittwoch',
    4: 'Donnerstag',
    5: 'Freitag',
    6: 'Samstag',
    7: 'Sonntag',
  };

  // Optional: for hint text / future select UI
  readonly options: Weekday[] = Object.entries(this.tage).map(([value, label]) => ({
    value: Number(value),
    label,
  }));

  berechneWochentag(): void {
    const t = this.tag ?? NaN;

    if (!Number.isInteger(t) || t < 1 || t > 7) {
      this.isError = true;
      this.result = 'Ungültiger Tag. Bitte gib eine Zahl von 1 bis 7 ein.';
      return;
    }

    this.isError = false;
    this.result = `Der eingegebene Tag ist ${this.tage[t]}.`;
  }

  reset(): void {
    this.tag = null;
    this.result = '';
    this.isError = false;
  }
}
