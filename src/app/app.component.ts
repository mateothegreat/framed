import { Component } from '@angular/core';
import { FramedDimensions } from '../../projects/lib/src/lib/framed-dimensions';
import { FramedThemeDark } from '../../projects/lib/src/lib/framed-theme';
import { FramedService } from '../../projects/lib/src/lib/framed.service';
import { ExpandablesPanelComponent } from './demo/panels/expandables-panel/expandables-panel.component';
import { RouterPanelComponent } from './demo/panels/router-panel/router-panel.component';
import { ToolbarPanelComponent } from './demo/panels/toolbar-panel/toolbar-panel.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public constructor(private readonly framedService: FramedService) {
        framedService.framedFactoryService.add({
            name: 'toolbar',
            componentType: ToolbarPanelComponent,
            divider: true,
            resizable: true,
            dimensions: new FramedDimensions({
                full: false
            }),
            theme: new FramedThemeDark({
                panel: 'bg-dark-5/50',
                divider: 'bg-dark-5/90'
            })
        });
        framedService.framedFactoryService.add({
            name: 'expandables',
            componentType: ExpandablesPanelComponent,
            divider: true,
            resizable: true,
            dimensions: new FramedDimensions({
                full: false
            }),
            theme: new FramedThemeDark({
                panel: 'bg-dark-5/50',
                divider: 'bg-dark-5/90'
            })
        });

        framedService.framedFactoryService.add({
            name: 'router',
            componentType: RouterPanelComponent,
            divider: true,
            dimensions: new FramedDimensions({
                full: true
            }),
            theme: new FramedThemeDark({
                panel: 'bg-black'
            })
        });

        //
        // Uncomment to generate random panels:
        //
        // const names = [...Array(4)].map(() => Math.random().toString(36).substring(7));
        // const randomIndex = Math.floor(Math.random() * names.length);
        //
        // for (let i = 0; i < names.length; i++) {
        //     framedService.framedFactoryService.add({
        //         name: names[i],
        //         componentType: ResizablePanelComponent,
        //         resizable: i === randomIndex,
        //         divider: i !== randomIndex,
        //         theme:
        //             i === randomIndex
        //                 ? new FramedThemeDark({
        //                       panel: 'bg-none'
        //                   })
        //                 : new FramedThemeDark({
        //                       panel: 'bg-dark-4',
        //                       divider: 'bg-dark-2'
        //                   })
        //         // dimensions: {
        //         //     // current: {
        //         //     //     width: 300
        //         //     // },
        //         //     // min: {
        //         //     //     width: 500
        //         //     // }
        //         //     // max: {
        //         //     //     width: 300
        //         //     // }
        //         // }
        //     });
        // }
    }
}
