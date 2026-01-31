// vokale.component.ts
//
// Zählt die Vokale (a, e, i, o, u, ä, ö, ü) in einem vom Benutzer
// eingegebenen Text. Umsetzung als standalone Angular-Komponente
// mit Angular Material.

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vokale',

  // Standalone-Komponente: benötigte Abhängigkeiten werden lokal deklariert
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],

  templateUrl: './vokale.html',
  styleUrls: ['./vokale.scss'],
})
export class Vokale {

  // Eingabetext aus dem Textarea
  text = '';

  // Ergebnis der Berechnung; null = noch keine Berechnung
  vowelCount: number | null = null;

  /**
   * Zählt die Vokale im aktuellen Eingabetext.
   * Groß- und Kleinschreibung werden ignoriert.
   */
  countVowels(): void {
    const satz = (this.text ?? '').toLowerCase();
    const vokale = 'aeiouäöü';

    let count = 0;

    for (let i = 0; i < satz.length; i++) {
      if (vokale.includes(satz.charAt(i))) {
        count++;
      }
    }

    this.vowelCount = count;
  }

  /**
   * Setzt Eingabe und Ergebnis zurück.
   */
  clear(): void {
    this.text = '';
    this.vowelCount = null;
  }

  /**
   * Tastaturverhalten für das Textarea:
   * - Enter → Berechnung auslösen
   * - Shift + Enter → neue Zeile
   */
  onEnter(event:Event): void {
    const e = event as KeyboardEvent;
    if (e.shiftKey) {
      return;
    }

    e.preventDefault();
    this.countVowels();
  }
}
