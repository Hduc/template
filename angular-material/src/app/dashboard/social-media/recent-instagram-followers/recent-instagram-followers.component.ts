import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-recent-instagram-followers',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './recent-instagram-followers.component.html',
    styleUrl: './recent-instagram-followers.component.scss'
})
export class RecentInstagramFollowersComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}