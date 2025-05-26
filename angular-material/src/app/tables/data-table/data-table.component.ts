import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DtMyTasksComponent } from './dt-my-tasks/dt-my-tasks.component';
import { DtToDoListComponent } from './dt-to-do-list/dt-to-do-list.component';
import { DtAllProjectsComponent } from './dt-all-projects/dt-all-projects.component';
import { DtRecentLeadsComponent } from './dt-recent-leads/dt-recent-leads.component';
import { DtGroupLessonsComponent } from './dt-group-lessons/dt-group-lessons.component';
import { DtRecentOrdersComponent } from './dt-recent-orders/dt-recent-orders.component';
import { DtTopPerformersComponent } from './dt-top-performers/dt-top-performers.component';
import { DtStudentsProgressComponent } from './dt-students-progress/dt-students-progress.component';
import { DtTopSellingProductsComponent } from './dt-top-selling-products/dt-top-selling-products.component';
import { DtPerformanceOfAgentsComponent } from './dt-performance-of-agents/dt-performance-of-agents.component';
import { DtRecentCustomerRatingsComponent } from './dt-recent-customer-ratings/dt-recent-customer-ratings.component';

@Component({
    selector: 'app-data-table',
    imports: [RouterLink, DtTopSellingProductsComponent, DtRecentOrdersComponent, DtTopPerformersComponent, DtRecentLeadsComponent, DtMyTasksComponent, DtAllProjectsComponent, DtStudentsProgressComponent, DtGroupLessonsComponent, DtPerformanceOfAgentsComponent, DtRecentCustomerRatingsComponent, DtToDoListComponent],
    templateUrl: './data-table.component.html',
    styleUrl: './data-table.component.scss'
})
export class DataTableComponent {}