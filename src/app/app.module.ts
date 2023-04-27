import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FramedBreadcrumbsComponent } from '../../projects/lib/src/lib/components/breadcrumbs/breadcrumbs.component';
import { FramedButtonComponent } from '../../projects/lib/src/lib/components/buttons/button.component';
import { FramedExpandableComponent } from '../../projects/lib/src/lib/components/expandable/expandable.component';
import { FramedCheckboxComponent } from '../../projects/lib/src/lib/components/forms/checkbox.component';
import { FramedFormComponent } from '../../projects/lib/src/lib/components/forms/form.component';
import { FramedRadioComponents } from '../../projects/lib/src/lib/components/radios/radio-components.component';
import { FramedToggleComponent } from '../../projects/lib/src/lib/components/toggle/toggle.component';
import { FramedToolbarComponent } from '../../projects/lib/src/lib/components/toolbar/toolbar.component';
import { FramedTypeaheadComponent } from '../../projects/lib/src/lib/components/typeahead/typeahead.component';
import { FramedModule } from '../../projects/lib/src/lib/framed.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './demo/header/header.component';
import { OneDemoComponent } from './demo/one-demo/one-demo.component';
import { ExpandableCustomHeaderComponent } from './demo/panels/expandables-panel/expandable-custom-header/expandable-custom-header.component';
import { ExpandablesPanelComponent } from './demo/panels/expandables-panel/expandables-panel.component';
import { FullWidthPanelComponent } from './demo/panels/full-width-panel/full-width-panel.component';
import { LeftPanelComponent } from './demo/panels/left-panel/left-panel.component';
import { ResizablePanelComponent } from './demo/panels/resizable-panel/resizable-panel.component';
import { RightPanelComponent } from './demo/panels/right-panel/right-panel.component';
import { RouterPanelComponent } from './demo/panels/router-panel/router-panel.component';
import { ToolbarPanelComponent } from './demo/panels/toolbar-panel/toolbar-panel.component';
import { RandomComponent } from './demo/random/random.component';
import { TwoDemoComponent } from './demo/two-demo/two-demo.component';
import { CodeBlockComponent } from './shared/code-block.component';

@NgModule({
    declarations: [
        AppComponent,
        OneDemoComponent,
        TwoDemoComponent,
        HeaderComponent,
        LeftPanelComponent,
        RightPanelComponent,
        ResizablePanelComponent,
        FullWidthPanelComponent,
        ExpandablesPanelComponent,
        RandomComponent,
        RouterPanelComponent,
        ExpandableCustomHeaderComponent,
        ToolbarPanelComponent
    ],
    imports: [
        BrowserModule,
        FramedModule,
        FramedBreadcrumbsComponent,
        FramedButtonComponent,
        FramedCheckboxComponent,
        FramedExpandableComponent,
        FramedFormComponent,
        FramedRadioComponents,
        FramedToggleComponent,
        FramedToolbarComponent,
        FramedTypeaheadComponent,
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
        ]),
        CodeBlockComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
