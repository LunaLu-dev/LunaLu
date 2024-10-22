import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
    imports: [
        NgOptimizedImage,
        RouterOutlet
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
