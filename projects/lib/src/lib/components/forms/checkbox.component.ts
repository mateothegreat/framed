import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'framed-checkbox',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="flex items-center">
            <input
                checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Checked state
            </label>
        </div>
    `
})
export class FramedCheckboxComponent {}
