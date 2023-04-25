import { Component } from '@angular/core';
import { FramedFactoryOutletPosition } from '../../projects/lib/src/lib/factory/framed-factory-outlet-position';
import { FramedService } from '../../projects/lib/src/lib/framed.service';
import { LeftPanelComponent } from './demo/panels/left-panel/left-panel.component';
import { RightPanelComponent } from './demo/panels/right-panel/right-panel.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public constructor(private readonly framedService: FramedService) {
        //
        // Create a left panel
        //
        framedService.framedFactoryService.create(FramedFactoryOutletPosition.LEFT, {
            componentType: LeftPanelComponent
        });

        setTimeout(() => {
            //
            // Create a left panel
            //
            framedService.framedFactoryService.create(FramedFactoryOutletPosition.RIGHT, {
                componentType: RightPanelComponent
            });
        }, 1000);
    }
}
