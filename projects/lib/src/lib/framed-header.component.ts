import { Component } from '@angular/core';

@Component({
    selector: 'framed-header',
    template: `
        <div class="bg-dark-4 min-h-[70px]">
            <ng-content></ng-content>
        </div>
    `,
    styles: []
})
export class FramedHeaderComponent {}
