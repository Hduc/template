import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-upgrade-plan',
    imports: [RouterLink, MatCardModule, MatButtonModule],
    templateUrl: './upgrade-plan.component.html',
    styleUrl: './upgrade-plan.component.scss'
})
export class UpgradePlanComponent {}