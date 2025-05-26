import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-recently-played',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule],
    templateUrl: './recently-played.component.html',
    styleUrl: './recently-played.component.scss'
})
export class RecentlyPlayedComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
    
    displayedColumns: string[] = ['podcast', 'lastPlay', 'playTimes', 'bookmark', 'totalTime', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

}

export interface PeriodicElement {
    podcast: any;
    lastPlay: string;
    playTimes: string;
    bookmark: string;
    totalTime: string;
    action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        podcast: {
            img: 'images/playlists/playlist1.jpg',
            name: 'Mastering Digital Marketing',
            email: 'Sarah Johnson'
        },
        lastPlay: 'Played 40min. ago',
        playTimes: "8,200",
        bookmark: "ri-heart-line",
        totalTime: "45:30",
        action: "ri-more-fill"
    },
    {
        podcast: {
            img: 'images/playlists/playlist2.jpg',
            name: 'Content Marketing Essentials',
            email: 'Tom Richards'
        },
        lastPlay: 'Played 1h. ago',
        playTimes: "9,500",
        bookmark: "ri-heart-line",
        totalTime: "25:50",
        action: "ri-more-fill"
    },
    {
        podcast: {
            img: 'images/playlists/playlist3.jpg',
            name: 'Social Media Trends for 2025',
            email: 'David Chen'
        },
        lastPlay: 'Played 1day ago',
        playTimes: "7,400",
        bookmark: "ri-heart-line",
        totalTime: "30:20",
        action: "ri-more-fill"
    },
    {
        podcast: {
            img: 'images/playlists/playlist4.jpg',
            name: 'Building Brand Loyalty',
            email: 'Michael Young'
        },
        lastPlay: 'Played 2days ago',
        playTimes: "10,200",
        bookmark: "ri-heart-line",
        totalTime: "15:35",
        action: "ri-more-fill"
    },
    {
        podcast: {
            img: 'images/playlists/playlist5.jpg',
            name: 'Content Creation Techniques',
            email: 'Lisa Kim'
        },
        lastPlay: 'Played 3days ago',
        playTimes: "9,300",
        bookmark: "ri-heart-line",
        totalTime: "18:45",
        action: "ri-more-fill"
    },
    {
        podcast: {
            img: 'images/playlists/playlist6.jpg',
            name: 'The Future of AI in Marketing',
            email: 'Tom Richards'
        },
        lastPlay: 'Played 4days ago',
        playTimes: "6,300",
        bookmark: "ri-heart-line",
        totalTime: "22:15",
        action: "ri-more-fill"
    }
];