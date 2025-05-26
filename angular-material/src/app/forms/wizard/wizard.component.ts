import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { VerticalComponent } from './vertical/vertical.component';
import { HorizontalComponent } from './horizontal/horizontal.component';

@Component({
    selector: 'app-wizard',
    imports: [RouterLink, MatCardModule, HorizontalComponent, VerticalComponent],
    templateUrl: './wizard.component.html',
    styleUrl: './wizard.component.scss'
})
export class WizardComponent {}