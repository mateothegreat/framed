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
                classes: 'text-black'
            },
            {
                icon: 'squares',
                classes: 'fill-black'
            },
            {
                icon: 'tags',
                classes: 'fill-black'
            },
            {
                icon: 'settings',
                classes: 'fill-black'
            }
        ],
        bottom: [
            {
                icon: 'user',
                classes: 'fill-black'
            }
        ]
    });
}
