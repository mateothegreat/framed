import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FramedRadioComponent } from './radio-component';

@Component({
    selector: 'framed-radio-components',
    standalone: true,
    imports: [CommonModule],
    template: `
        <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            How much do you expect to use each month?
        </h3>
        <ul class="grid w-full gap-6 md:grid-cols-2">
            <li *ngFor="let component of components">
                <input
                    type="radio"
                    [id]="component.id"
                    name="hosting"
                    value="hosting-small"
                    class="hidden peer"
                    required />
                <label
                    [for]="component.id"
                    class="inline-flex items-center justify-between text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <ng-content></ng-content>
                </label>
            </li>
        </ul>
    `
})
export class FramedRadioComponents {
    @Input() public components: FramedRadioComponent[];
}
