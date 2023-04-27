import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FramedTypeahead } from './typeahead';

@Component({
    selector: 'framed-typeahead',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="m-5 flex border-2 border-gray-100">
            <span
                *ngFor="let item of typeahead?.selected"
                class="m-2 inline-flex cursor-pointer items-center whitespace-nowrap rounded-sm bg-indigo-500 px-2 py-1 text-sm font-semibold text-white hover:bg-indigo-300 hover:text-black">
                {{ item }}
                <button
                    type="button"
                    class="-mr-0.5 ml-1.5 inline-flex flex-shrink-0 rounded-full p-1 hover:bg-indigo-400"
                    (click)="remove(item)">
                    <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                    </svg>
                </button>
            </span>
            <div class="mt-1 flex rounded-md shadow-sm">
                <input placeholder="Choose tag" class="w-full focus:outline-none" />
            </div>
        </div>
        <div class="ml-5 -mt-5 flex">
            <aside class=" z-10 mt-1 flex w-64 flex-col items-start rounded-md border bg-white shadow-md">
                <ul class="flex w-full flex-col">
                    <li
                        *ngFor="let item of typeahead?.data"
                        (click)="add(item)"
                        class="space-x-2 px-2 py-3 hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white focus:outline-none">
                        {{ item }}
                    </li>
                </ul>
            </aside>
        </div>
    `
})
export class FramedTypeaheadComponent<T> {
    @Input() public typeahead: FramedTypeahead<T>;

    public add(item: T): void {
        this.typeahead.selected.push(item);
    }

    public remove(item: T): void {
        this.typeahead.selected = this.typeahead.selected.filter(x => x !== item);
    }

    public filter(value: string): T[] {
        return this.typeahead.data.filter(x => x.toString().includes(value));
    }
}
