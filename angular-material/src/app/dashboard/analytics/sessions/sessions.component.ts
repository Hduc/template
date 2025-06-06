import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SessionsService } from './sessions.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-sessions',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './sessions.component.html',
    styleUrl: './sessions.component.scss'
})
export class SessionsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private sessionsService: SessionsService
    ) {}

    ngOnInit(): void {
        this.sessionsService.loadChart();
    }

}