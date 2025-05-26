import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-upcoming-episodes',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule],
    templateUrl: './upcoming-episodes.component.html',
    styleUrl: './upcoming-episodes.component.scss'
})
export class UpcomingEpisodesComponent {

    displayedColumns: string[] = ['notice', 'link'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

}

export interface PeriodicElement {
    notice: any;
    link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        notice: {
            img: 'images/icons/note.svg',
            title: 'AI for Content Strategy',
            desc: 'Amanda Garcia',
            date: 'October 28, 2025'
        },
        link: 'arrow_outward'
    },
    {
        notice: {
            img: 'images/icons/video-chat.svg',
            title: 'Secrets to Viral Marketing',
            desc: 'Sarah Johnson',
            date: 'November 1, 2025'
        },
        link: 'arrow_outward'
    },
    {
        notice: {
            img: 'images/icons/ball.svg',
            title: 'Social Media Strategy',
            desc: 'David Chen',
            date: 'November 12, 2025'
        },
        link: 'arrow_outward'
    },
    {
        notice: {
            img: 'images/icons/celebration.svg',
            title: 'Content Trends for 2025',
            desc: 'Tom Richards',
            date: 'November 28, 2025'
        },
        link: 'arrow_outward'
    }
];