import { Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {SocialsComponent} from './socials/socials.component';
import {PronounsComponent} from './pronouns/pronouns.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'LunaLu'
  },
  {
    path: 'socials',
    component: SocialsComponent,
    title: 'LunaLu'
  },
  {
    path: 'pronouns',
    component: PronounsComponent,
  }
];
