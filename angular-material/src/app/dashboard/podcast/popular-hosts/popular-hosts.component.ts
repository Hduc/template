import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-popular-hosts',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatTableModule],
    templateUrl: './popular-hosts.component.html',
    styleUrl: './popular-hosts.component.scss'
})
export class PopularHostsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
    
    displayedColumns: string[] = ['name', 'hosted', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

}

export interface PeriodicElement {
    name: any;
    hosted: number;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        name: {
            img: 'images/users/user54.jpg',
            name: 'Sarah W.',
            email: 'Marketing'
        },
        hosted: 25,
        action: {
            text: "Follow",
            className: 'follow'
        }
    },
    {
        name: {
            img: 'images/users/user53.jpg',
            name: 'Tom R.',
            email: 'Blogging'
        },
        hosted: 30,
        action: {
            text: "Follow",
            className: 'follow'
        }
    },
    {
        name: {
            img: 'images/users/user55.jpg',
            name: 'Amanda G.',
            email: 'Branding'
        },
        hosted: 28,
        action: {
            text: "Following",
            className: 'following'
        }
    },
    {
        name: {
            img: 'images/users/user41.jpg',
            name: 'Lisa Kim',
            email: 'Storytelling'
        },
        hosted: 20,
        action: {
            text: "Follow",
            className: 'follow'
        }
    },
    {
        name: {
            img: 'images/users/user43.jpg',
            name: 'David C.',
            email: 'Social Media'
        },
        hosted: 18,
        action: {
            text: "Follow",
            className: 'follow'
        }
    }
];