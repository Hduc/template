import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-read',
    imports: [RouterLink, SidebarComponent, MatButtonModule, MatMenuModule, MatCardModule],
    templateUrl: './read.component.html',
    styleUrl: './read.component.scss'
})
export class ReadComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}