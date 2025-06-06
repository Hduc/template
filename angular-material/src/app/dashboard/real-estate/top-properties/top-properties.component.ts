import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-top-properties',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, RouterLink],
    templateUrl: './top-properties.component.html',
    styleUrl: './top-properties.component.scss'
})
export class TopPropertiesComponent {}