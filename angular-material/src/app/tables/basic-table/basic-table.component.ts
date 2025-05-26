import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtMyTasksComponent } from './bt-my-tasks/bt-my-tasks.component';
import { BtToDoListComponent } from './bt-to-do-list/bt-to-do-list.component';
import { BtRecentLeadsComponent } from './bt-recent-leads/bt-recent-leads.component';
import { BtAllProjectsComponent } from './bt-all-projects/bt-all-projects.component';
import { BtGroupLessonsComponent } from './bt-group-lessons/bt-group-lessons.component';
import { BtRecentOrdersComponent } from './bt-recent-orders/bt-recent-orders.component';
import { BtTopPerformersComponent } from './bt-top-performers/bt-top-performers.component';
import { BtStudentsProgressComponent } from './bt-students-progress/bt-students-progress.component';
import { BtTopSellingProductsComponent } from './bt-top-selling-products/bt-top-selling-products.component';
import { BtPerformanceOfAgentsComponent } from './bt-performance-of-agents/bt-performance-of-agents.component';
import { BtRecentCustomerRatingsComponent } from './bt-recent-customer-ratings/bt-recent-customer-ratings.component';

@Component({
    selector: 'app-basic-table',
    imports: [RouterLink, BtTopSellingProductsComponent, BtRecentOrdersComponent, BtTopPerformersComponent, BtRecentLeadsComponent, BtAllProjectsComponent, BtMyTasksComponent, BtStudentsProgressComponent, BtGroupLessonsComponent, BtPerformanceOfAgentsComponent, BtRecentCustomerRatingsComponent, BtToDoListComponent],
    templateUrl: './basic-table.component.html',
    styleUrl: './basic-table.component.scss'
})
export class BasicTableComponent {}