import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css'
})
export class SocialsComponent {

  OpenLink(index: number){
    const links = [
      'https://only-fans.uk/LunaLu',
      'https://discord.com/users/1098996480011944017',
      'https://www.twitch.tv/lunaluplayz',
      'https://vrchat.com/home/user/usr_19d6e456-23a6-41d4-8d0a-cf0ddd305e47',
      'https://www.reddit.com/user/LunaLu_04',
      'https://github.com/LunaLu-dev',
      'https://www.youtube.com/@Luna_Lu1',
      'https://x.com/LunaLuplayz',
      'https://www.planetminecraft.com/member/_luna04_/',
      'https://www.pinterest.co.uk/lunaplayz04/',
      'https://wishlist.lunalu.org/',
      'https://steamcommunity.com/id/_LunaLu_/',
      'https://open.spotify.com/user/31jo3k6nxhloleusg3tidy7ctimq?si=93424dcbf62e47ea',
      'https://myanimelist.net/profile/LunaLuPlayz',
      'mailto:luna.lu@lunalu.org',
    ];

    window.open(links[index]);
  }
}
