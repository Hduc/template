import { Component } from '@angular/core';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-player',
    imports: [MusicPlayerComponent, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './player.component.html',
    styleUrl: './player.component.scss'
})
export class PlayerComponent {}