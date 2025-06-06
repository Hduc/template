import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-bt-students-progress',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatProgressBarModule],
    templateUrl: './bt-students-progress.component.html',
    styleUrl: './bt-students-progress.component.scss'
})
export class BtStudentsProgressComponent {}