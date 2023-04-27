import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FramedToggleComponent } from '../toggle/toggle.component';
import { FramedForm } from './form';

@Component({
    selector: 'framed-form',
    standalone: true,
    imports: [CommonModule, FramedToggleComponent],
    template: `
        <div *ngFor="let row of form?.rows" class="grid gap-4 mb-4 sm:grid-cols-2">
            <div
                *ngFor="let control of row.controls"
                [class.flex]="control.type === 'checkbox'"
                [class.gap-2]="control.type === 'checkbox'"
                [class.col-span-4]="row.controls.length === 1"
                class="flex">
                <input
                    *ngIf="control.type === 'checkbox'"
                    type="checkbox"
                    value=""
                    class="mt-0.5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <div class="flex flex-col gap-1">
                    <div class="block text-sm font-medium text-dark-2 dark:text-dark-2">
                        {{ control.title }}
                    </div>
                    <div class="block text-xs font-medium text-dark-3 dark:text-dark-3 mb-2">
                        {{ control.subtitle }}
                    </div>
                </div>
                <input
                    *ngIf="control.type === 'text'"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    [placeholder]="control.placeholder" />
                <select
                    *ngIf="control.type === 'select'"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option *ngFor="let d of control.data" [selected]="d === control.control.value">
                        {{ d }}
                    </option>
                </select>
                <textarea
                    *ngIf="control.type === 'textarea'"
                    rows="4"
                    class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    [placeholder]="control.placeholder"></textarea>
                <framed-toggle *ngIf="control.type === 'toggle'"></framed-toggle>
            </div>
        </div>
    `
})
export class FramedFormComponent {
    @Input() public form: FramedForm;
}
