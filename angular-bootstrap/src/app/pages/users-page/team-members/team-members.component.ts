import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-team-members',
    imports: [RouterLink],
    templateUrl: './team-members.component.html',
    styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}