import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-inbox',
    imports: [RouterLink, SidebarComponent, MatCardModule, MatButtonModule, MatMenuModule, MatCheckboxModule, MatTooltipModule, MatTabsModule, RouterOutlet, RouterLinkActive],
    templateUrl: './inbox.component.html',
    styleUrl: './inbox.component.scss'
})
export class InboxComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}