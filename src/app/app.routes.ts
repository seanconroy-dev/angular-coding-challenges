import { Routes } from '@angular/router';
import { Menu } from './pages/menu/menu';
import { Notenbewertung } from './pages/notenbewertung/notenbewertung';
import { Wochentag } from './pages/wochentag/wochentag';
import { Fakultaet } from './pages/fakultaet/fakultaet';
import { Vokale } from './pages/vokale/vokale';
import { MinMaxDurch } from './pages/min-max-durch/min-max-durch';
import { Haeufigkeit } from './pages/haeufigkeit/haeufigkeit';
import { Bubble } from './pages/bubble/bubble';
import { About } from './pages/about/about';
import { DuplikateEntfernen } from './pages/duplikate-entfernen/duplikate-entfernen';

export const routes: Routes = [
    {
        path: '', redirectTo: 'menu', pathMatch: 'full'
    },
    {
        path: 'menu', component: Menu
    },
    {
        path: 'notenbewertung', component: Notenbewertung
    },
    {
        path: 'wochentag', component: Wochentag
    },
    {
        path: 'fakultaet', component: Fakultaet
    },
    {
        path: 'vokale', component: Vokale
    },
    {
        path: 'min-max-durch', component: MinMaxDurch
    },
    {
        path: 'haeufigkeit', component: Haeufigkeit
    },
    {
        path: 'bubble', component: Bubble
    },
    {
        path: 'duplikate-entfernen', component: DuplikateEntfernen
    },
    {
        path: 'about', component: About
    }
];
