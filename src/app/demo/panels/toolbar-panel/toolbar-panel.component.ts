import { Component } from '@angular/core';
import { FramedToolbar } from '../../../../../projects/lib/src/lib/components/toolbar/toolbar';

@Component({
    selector: 'app-toolbar-panel',
    templateUrl: './toolbar-panel.component.html',
    styleUrls: ['./toolbar-panel.component.scss']
})
export class ToolbarPanelComponent {
    public toolbar: FramedToolbar = new FramedToolbar({
        top: [
            {
                icon: 'logout',
                classes: 'text-dark-3/20'
            },
            {
                icon: 'logout',
                classes: 'text-dark-3/20'
            }
        ],
        bottom: [
            {
                icon: 'logout',
                classes: 'text-dark-3/20'
            },
            {
                icon: 'logout',
                classes: 'text-dark-3/20'
            }
        ]
    });
}
