import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FramedHeaderComponent } from './framed-header.component';
import { FramedPanelComponent } from './framed-panel.component';
import { FramedComponent } from './framed.component';

@NgModule({
    declarations: [FramedComponent, FramedHeaderComponent, FramedPanelComponent],
    imports: [CommonModule],
    exports: [FramedComponent]
})
export class FramedModule {}
