import { Component } from '@angular/core';
import { FpKeyFeaturesComponent } from '../common/fp-key-features/fp-key-features.component';
import { FpCtaComponent } from '../common/fp-cta/fp-cta.component';
import { FpTeamComponent } from '../common/fp-team/fp-team.component';

@Component({
    selector: 'app-features',
    imports: [FpKeyFeaturesComponent, FpCtaComponent, FpTeamComponent],
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss'
})
export class FeaturesComponent {}