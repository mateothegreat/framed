import { Component } from '@angular/core';
import { FramedAlignment } from '../../../../projects/lib/src/lib/common/alignment';
import { FramedLevel } from '../../../../projects/lib/src/lib/common/levels';
import { Breadcrumb } from '../../../../projects/lib/src/lib/components/breadcrumbs/breadcrumb';
import { FramedButton } from '../../../../projects/lib/src/lib/components/buttons/button';
import { FramedToggle } from '../../../../projects/lib/src/lib/components/toggle/toggle';
import { TwoDemoComponent } from '../two-demo/two-demo.component';

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

    public button: FramedButton<string> = new FramedButton({
        label: 'Busy Button',
        busy: true,
        level: FramedLevel.INFO
    });
    public button2: FramedButton<string> = new FramedButton({
        level: FramedLevel.SUCCESS,
        count: 13
    });
    public button3: FramedButton<TwoDemoComponent> = new FramedButton({
        level: FramedLevel.ERROR,
        label: TwoDemoComponent
    });

    public toggle1 = new FramedToggle({
        label: 'Toggle (right aligned)',
        level: FramedLevel.INFO
    });

    public toggle2 = new FramedToggle({
        label: 'Toggle (left aligned)',
        level: FramedLevel.WARNING,
        align: FramedAlignment.LEFT,
        checked: true
    });
}
