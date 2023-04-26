import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from './breadcrumb';

@Component({
    selector: 'framed-breadcrumbs',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
        <nav class="text-dark-3 bg-dark-5 h-[50px] ml-0.5 mr-0.5 font-medium">
            <ol class="list-none flex h-full px-3 items-center gap-1">
                <li>
                    <svg
                        class="flex w-3.5 h-3.5 items-center cursor-pointer hover:fill-accent-4 hover:opacity-100 gap-1 fill-default-4/50"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m503.871094 231.433594-236.800782-226.984375c-6.183593-5.933594-15.957031-5.933594-22.140624 0l-237.035157 227.21875c-5.015625 5.015625-7.894531 11.925781-7.894531 18.988281 0 14.699219 11.96875 26.667969 26.667969 26.667969h37.332031v192c0 23.570312 19.09375 42.664062 42.667969 42.664062h298.664062c23.574219 0 42.667969-19.09375 42.667969-42.664062v-192h37.332031c14.699219 0 26.667969-11.96875 26.667969-26.667969 0-7.0625-2.878906-13.972656-8.128906-19.222656zm0 0" />
                    </svg>
                </li>
                <li
                    *ngFor="let crumb of breadcrumbs; let i = index"
                    [class.opacity-100]="i === breadcrumbs.length - 1"
                    [class.opacity-50]="i !== breadcrumbs.length - 1"
                    [class.font-medium]="i === breadcrumbs.length - 1"
                    class="flex items-center text-sm cursor-pointer hover:text-accent-4 hover:opacity-100 gap-1">
                    <svg class="w-3.5 h-3.5 text-dark-3/50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g>
                                <path
                                    d="m197.15 79.8c5.55 0 10.5 3.48 12.39 8.7l117.69 326.06c3.1 8.58-3.26 17.64-12.39 17.64-5.55 0-10.5-3.48-12.39-8.7l-117.68-326.06c-3.1-8.58 3.26-17.64 12.38-17.64z"
                                    fill="currentColor" />
                                <path
                                    d="m314.85 434.7c-6.58 0-12.5-4.16-14.74-10.35l-117.69-326.06c-1.76-4.87-1.06-10.09 1.92-14.32 2.97-4.24 7.65-6.66 12.82-6.66 6.58 0 12.5 4.16 14.74 10.35l117.69 326.06c1.76 4.87 1.06 10.09-1.92 14.32-2.97 4.23-7.65 6.66-12.82 6.66zm-117.7-352.4c-3.52 0-6.71 1.65-8.73 4.54-2.03 2.88-2.5 6.44-1.3 9.75l117.69 326.06c1.52 4.21 5.55 7.05 10.03 7.05 3.52 0 6.71-1.65 8.73-4.54 2.03-2.88 2.5-6.44 1.3-9.75l-117.68-326.06c-1.52-4.22-5.56-7.05-10.04-7.05"
                                    fill="currentColor" />
                            </g>
                        </g>
                    </svg>
                    <a [routerLink]="crumb.route">
                        {{ crumb.label }}
                    </a>
                </li>
            </ol>
        </nav>
    `
})
export class FramedBreadcrumbsComponent {
    @Input() public breadcrumbs: Breadcrumb[];
}
