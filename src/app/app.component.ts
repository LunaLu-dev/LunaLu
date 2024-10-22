import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {MainComponent} from './main/main.component';
import {PronounsComponent} from './pronouns/pronouns.component';
import {SocialsComponent} from './socials/socials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, MainComponent, PronounsComponent, SocialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LunaLu';
}
