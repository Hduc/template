import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-personal',
    imports: [MatCardModule, MatMenuModule, MatButtonModule, MatCheckboxModule],
    templateUrl: './personal.component.html',
    styleUrl: './personal.component.scss'
})
export class PersonalComponent {}