import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { calculateFakultaet } from './fakultaet.util';

/**
 * Komponente zur Berechnung der Fakultät einer vom Benutzer eingegebenen Zahl.*/
@Component({
  selector: 'app-fakultaet',
  imports: [
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,

  ],
  templateUrl: './fakultaet.html',
  styleUrl: './fakultaet.scss',
})
export class Fakultaet {

  /** Aktuell eingegebene Zahl (noch nicht gesetzt = null) */
  numberInput: number | null = null;

  /** Textuelle Ergebnis- oder Fehlermeldung für das Template */
  result = '';

  /**
   * Wird beim Absenden des Formulars aufgerufen und steuert
   * die Validierung sowie die Berechnung der Fakultät.
   */
  calculateFakultaet(): void {
    calculateFakultaet.call(this);
  }

}

