import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


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
    if (this.numberInput === null) {
      this.result = 'Bitte eine Zahl eingeben.';
      return;
    }

    try {
      const fakultaet = this.berechneFakultaet(this.numberInput);
      this.result = `Die Fakultät von ${this.numberInput} ist ${fakultaet}.`;
    } catch (error) {
      this.result = (error as Error).message;
    }
  }

  /**
   * Berechnet die Fakultät rekursiv.
   * Der Wertebereich ist bewusst begrenzt, um Überläufe zu vermeiden.
   */
  berechneFakultaet(n: number): number {
    if (n < 0 || n > 12) {
      throw new Error('n must be between 0 and 12');
    }

    if (n === 0) {
      return 1;
    }

    return n * this.berechneFakultaet(n - 1);
  }
}

