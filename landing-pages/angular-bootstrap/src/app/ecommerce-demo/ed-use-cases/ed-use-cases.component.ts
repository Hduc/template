import { Component } from '@angular/core';
import { UseCasesComponent } from '../common/use-cases/use-cases.component';
import { DashboardShowcaseComponent } from '../common/dashboard-showcase/dashboard-showcase.component';
import { CtaComponent } from '../common/cta/cta.component';

@Component({
    selector: 'app-ed-use-cases',
    imports: [UseCasesComponent, DashboardShowcaseComponent, CtaComponent],
    templateUrl: './ed-use-cases.component.html',
    styleUrl: './ed-use-cases.component.scss'
})
export class EdUseCasesComponent {}