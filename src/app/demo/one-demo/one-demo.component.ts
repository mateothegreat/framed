import { Component } from '@angular/core';
import { Breadcrumb } from '../../../../projects/lib/src/lib/components/breadcrumbs/breadcrumb';

@Component({
    selector: 'app-one-demo',
    templateUrl: './one-demo.component.html',
    styleUrls: ['./one-demo.component.scss']
})
export class OneDemoComponent {
    public breadcrumbs: Breadcrumb[] = [
        {
            label: 'Settings',
            route: '/one'
        },
        {
            label: 'Billing',
            route: '/one'
        },
        {
            label: 'Subscriptions',
            route: '/one'
        }
    ];
}
