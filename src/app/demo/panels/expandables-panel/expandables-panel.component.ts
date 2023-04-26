import { Component } from '@angular/core';
import { Expandable } from '@mateothegreat/framed';
import { RandomComponent } from '../../random/random.component';
import { ExpandableCustomHeaderComponent } from './expandable-custom-header/expandable-custom-header.component';

@Component({
    selector: 'app-expandables-panel',
    templateUrl: './expandables-panel.component.html',
    styleUrls: ['./expandables-panel.component.scss']
})
export class ExpandablesPanelComponent {
    public expandables = [
        new Expandable({
            label: 'Expandable (default closed)',
            component: RandomComponent
        }),
        new Expandable({
            label: 'Expandable (default opened)',
            component: RandomComponent,
            open: true
        }),
        new Expandable({
            label: ExpandableCustomHeaderComponent,
            component: RandomComponent
        })
    ];
}
