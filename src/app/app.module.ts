import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FramedModule } from '../../projects/lib/src/lib/framed.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './demo/header/header.component';
import { OneDemoComponent } from './demo/one-demo/one-demo.component';
import { LeftPanelComponent } from './demo/panels/left-panel/left-panel.component';
import { RightPanelComponent } from './demo/panels/right-panel/right-panel.component';
import { TwoDemoComponent } from './demo/two-demo/two-demo.component';
import { ResizablePanelComponent } from './demo/panels/resizable-panel/resizable-panel.component';
import { FullWidthPanelComponent } from './demo/panels/full-width-panel/full-width-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        OneDemoComponent,
        TwoDemoComponent,
        HeaderComponent,
        LeftPanelComponent,
        RightPanelComponent,
        ResizablePanelComponent,
        FullWidthPanelComponent
    ],
    imports: [
        BrowserModule,
        FramedModule,
        RouterModule.forRoot([
            {
                path: 'one',
                component: OneDemoComponent
            },
            {
                path: 'two',
                component: TwoDemoComponent
            },
            {
                path: '',
                redirectTo: 'one',
                pathMatch: 'full'
            }
        ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
