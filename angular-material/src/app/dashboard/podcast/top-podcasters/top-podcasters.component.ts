import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-podcasters',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatTableModule],
    templateUrl: './top-podcasters.component.html',
    styleUrl: './top-podcasters.component.scss'
})
export class TopPodcastersComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
    
    displayedColumns: string[] = ['user', 'episodes', 'earnings', 'ratings'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

}

export interface PeriodicElement {
    user: any;
    episodes: number;
    earnings: string;
    ratings: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        user: {
            img: 'images/users/user24.jpg',
            name: 'Tom Richards',
            email: 'Content Strategist'
        },
        episodes: 55,
        earnings: "$125,000",
        ratings: [
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            }
        ]
    },
    {
        user: {
            img: 'images/users/user25.jpg',
            name: 'Amanda Garcia',
            email: 'Social Media'
        },
        episodes: 110,
        earnings: "$140,000",
        ratings: [
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-half-fill'
            }
        ]
    },
    {
        user: {
            img: 'images/users/user26.jpg',
            name: 'Lisa Kim',
            email: 'Branding Consultant'
        },
        episodes: 85,
        earnings: "$160,000",
        ratings: [
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-line'
            }
        ]
    },
    {
        user: {
            img: 'images/users/user27.jpg',
            name: 'Michael Young',
            email: 'Data Analytics'
        },
        episodes: 130,
        earnings: "$90,000",
        ratings: [
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-half-fill'
            }
        ]
    },
    {
        user: {
            img: 'images/users/user28.jpg',
            name: 'Ravi Patel',
            email: 'SEO & SEM'
        },
        episodes: 75,
        earnings: "$85,000",
        ratings: [
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-fill'
            },
            {
                star: 'ri-star-half-fill'
            }
        ]
    }
];