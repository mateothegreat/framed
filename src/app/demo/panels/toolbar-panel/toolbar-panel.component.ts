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
                icon: 'home',
                classes: 'text-dark-2/20 hover:text-accent-4 cursor-pointer'
            },
            {
                icon: 'squares',
                classes: 'fill-dark-2/20 hover:fill-accent-4 cursor-pointer'
            },
            {
                icon: 'tags',
                classes: 'fill-dark-2/20 hover:fill-accent-4 cursor-pointer'
            },
            {
                icon: 'settings',
                classes: 'fill-dark-2/20 hover:fill-accent-4 cursor-pointer'
            }
        ],
        bottom: [
            {
                icon: 'user',
                classes: 'fill-dark-2/20 hover:fill-accent-4 cursor-pointer'
            }
        ]
    });
}
