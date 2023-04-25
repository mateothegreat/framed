import { Component, Input } from '@angular/core';
import { FramedPanel } from './framed-panel';
import { FramedService } from './framed.service';

@Component({
    selector: 'framed-panel',
    template: `
        <div
            [class.border-r-2]="$any(config.position) === 'left'"
            [class.border-l-2]="$any(config.position) === 'right'"
            class="flex flex-col gap-0 items-start justify-start w-[300px] h-full border-r-2 border-dark-5">
            panel
        </div>
    `
})
export class FramedPanelComponent {
    @Input() config: FramedPanel<any>;

    public constructor(private readonly framedService: FramedService) {}
}
