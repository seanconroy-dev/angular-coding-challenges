import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notenbewertung',
  imports: [RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './notenbewertung.html',
  styleUrl: './notenbewertung.scss',
})
export class Notenbewertung {
  note: number | null = null;
  result = '';

berechneNote(): void {
  const note = this.note;
if (note === null) return;

if (note <= 0 || note > 100) {
  this.result = "Ungültige Eingabe";
  return;
}

if (note < 60) {
    this.result = "Note: Mangelhaft";
} else if (note < 70) {
    this.result = "Note: Ausreichend";
} else if (note < 80) {
    this.result = "Note: Befriedigend";
} else if (note < 90) {
    this.result = "Note: Gut";
} else if (note <= 100) {
    this.result = "Note: Sehr gut ";
}
} 
}
