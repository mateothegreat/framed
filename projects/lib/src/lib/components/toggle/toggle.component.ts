import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FramedToggle } from './toggle';

@Component({
    selector: 'framed-toggle',
    standalone: true,
    imports: [CommonModule],
    template: `
        <label
            [class.flex-row-reverse]="toggle.align === 'right'"
            class="relative flex items-center mr-5 cursor-pointer">
            <div class="">
                <input [checked]="toggle.checked" type="checkbox" value="true" class="sr-only peer" />
                <div
                    [ngClass]="classes"
                    [class.ml-3]="toggle.align === 'right'"
                    [class.after:right-[2px]]="toggle.align === 'right'"
                    class="w-11 h-6 rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
            </div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {{ toggle.label }}
            </span>
        </label>
    `
})
export class FramedToggleComponent<T> implements OnInit {
    @Input() public toggle: FramedToggle<T>;

    public classes: string;

    public ngOnInit() {
        this.classes = `
        bg-default-4
        peer-checked:bg-${this.toggle.level}-3
        peer-focus:ring-${this.toggle.level}-4
        not:peer-checked:bg-${this.toggle.level}-2
        `;
    }
}
