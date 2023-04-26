import { Component } from '@angular/core';
import { FramedDimensions } from '../../projects/lib/src/lib/framed-dimensions';
import { FramedThemeDark } from '../../projects/lib/src/lib/framed-theme';
import { FramedService } from '../../projects/lib/src/lib/framed.service';
import { ResizablePanelComponent } from './demo/panels/resizable-panel/resizable-panel.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public constructor(private readonly framedService: FramedService) {
        const names = [...Array(4)].map(() => Math.random().toString(36).substring(7));
        const randomIndex = Math.floor(Math.random() * names.length);

        for (let i = 0; i < names.length; i++) {
            framedService.framedFactoryService.add({
                name: names[i],
                componentType: ResizablePanelComponent,
                resizable: i === randomIndex,
                divider: i !== randomIndex,
                dimensions: new FramedDimensions({
                    full: i === randomIndex
                }),
                theme:
                    i === randomIndex
                        ? new FramedThemeDark({
                              panel: 'bg-none'
                          })
                        : new FramedThemeDark({
                              panel: 'bg-dark-4',
                              divider: 'bg-dark-2'
                          })
                // dimensions: {
                //     // current: {
                //     //     width: 300
                //     // },
                //     // min: {
                //     //     width: 500
                //     // }
                //     // max: {
                //     //     width: 300
                //     // }
                // }
            });
        }
        //
        // Create a left panel
        //
        // framedService.framedFactoryService.create(FramedFactoryOutletPosition.LEFT, {
        //     componentType: LeftPanelComponent
        // });
        //
        // framedService.framedFactoryService.add({
        //     name: 'resize-1',
        //     componentType: ResizablePanelComponent,
        //     resizable: true,
        //     dimensions: new FramedDimensions()
        //     // dimensions: {
        //     //     // current: {
        //     //     //     width: 300
        //     //     // },
        //     //     // min: {
        //     //     //     width: 500
        //     //     // }
        //     //     // max: {
        //     //     //     width: 300
        //     //     // }
        //     // }
        // });
        //
        // framedService.framedFactoryService.add({
        //     name: 'full',
        //     componentType: FullWidthPanelComponent,
        //     resizable: true,
        //     dimensions: new FramedDimensions({
        //         full: true
        //     })
        // });
        // framedService.framedFactoryService.add({
        //     name: 'resize-2',
        //     componentType: ResizablePanelComponent,
        //     resizable: true,
        //     dimensions: new FramedDimensions()
        //     // {
        //     // current: {
        //     //     width: 500
        //     // },
        //     // min: {
        //     //     width: 100
        //     // }
        //     // max: {
        //     //     width: 300
        //     // }
        //     // }
        // });
        //
    }
}
