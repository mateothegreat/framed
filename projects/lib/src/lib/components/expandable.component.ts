import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    ApplicationRef,
    Component,
    createComponent,
    Input,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { Expandable } from './expandable';

@Component({
    selector: 'framed-expandable',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="flex flex-col gap-0 items-start justify-start w-[300px] mb-0.5 mr-0.5">
            <div
                class="cursor-pointer overflow-auto text-default-3 hover:text-default-2 shadow-2xl border-b-2 border-solid border-dark-5 w-full flex flex-col  text-sm">
                <div
                    [ngClass]="expandable.open ? expandable.theme.active : expandable.theme.inactive"
                    (click)="toggle(expandable)"
                    class="flex items-center bg-dark-3 p-3">
                    <svg
                        [class.rotate-90]="expandable.open"
                        class="shrink-0 relative overflow-visible"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 15.5858C9 16.4767 10.0771 16.9229 10.7071 16.2929L14.2929 12.7071C14.6834 12.3166 14.6834 11.6834 14.2929 11.2929L10.7071 7.70711C10.0771 7.07714 9 7.52331 9 8.41421L9 15.5858Z"
                            fill="currentColor" />
                    </svg>
                    <div *ngIf="expandable.label.constructor.name !== 'Function'" class="text-left relative">
                        {{ expandable.label }}
                    </div>
                    <div
                        *ngIf="expandable.label.constructor.name === 'Function'"
                        class="flex items-center justify-center">
                        <ng-container *ngComponentOutlet="$any(expandable.label)"></ng-container>
                    </div>
                </div>
                <div
                    [class.hidden]="!expandable.open"
                    [ngClass]="expandable.theme.content"
                    class="p-4 overflow-auto shadow">
                    <div #component></div>
                </div>
            </div>
        </div>
    `
})
export class FramedExpandableComponent<H, T> implements AfterViewInit {
    @ViewChild('component', { read: ViewContainerRef }) public component: ViewContainerRef;
    @Input() expandable: Expandable<H, T>;

    public constructor(private readonly applicationRef: ApplicationRef) {}

    public ngAfterViewInit() {
        const instance = createComponent(this.expandable.component, {
            hostElement: this.component.element.nativeElement,
            environmentInjector: this.applicationRef.injector
        });

        // @ts-ignore
        instance.instance.expandable = this.expandable;
        instance.changeDetectorRef.detectChanges();
    }

    public toggle(row: Expandable<H, T>) {
        if (row.open) {
            row.open = false;
        } else {
            row.open = true;
        }
    }
}
