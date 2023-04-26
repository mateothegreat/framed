import { Component, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { FramedFactoryService } from './factory/framed-factory.service';
import { FramedConfig } from './framed-config';
import { FramedLayoutService } from './framed-layout.service';
import { FramedService } from './framed.service';

@Component({
    selector: 'framed',
    template: `
        <div class="absolute bottom-0 left-0 right-0 top-0 flex flex-col bg-black">
            <div #container class="flex w-full h-full">
                <framed-panel
                    *ngFor="let name of framedFactoryService.configs | keyvalue"
                    (dragStart)="onDragStart($event)"
                    [config]="framedFactoryService.configs[name.key]"
                    [style.width]="
                        framedFactoryService.configs[name.key].dimensions.current.width > 0
                            ? framedFactoryService.configs[name.key].dimensions.current.width + 'px'
                            : 'auto'
                    "
                    [class.flex-1]="framedFactoryService.configs[name.key].dimensions.full"
                    class="h-full"></framed-panel>
            </div>
        </div>
    `
})
export class FramedComponent {
    @ViewChild('container', { read: ViewContainerRef }) private container: ViewContainerRef;

    public show: boolean;
    public resizing: boolean;
    public dragging: string;
    public running: boolean;
    public prev: string;

    private isResizing = false;
    private destroy = new Subject<void>();

    public constructor(
        public readonly framedService: FramedService,
        public readonly framedFactoryService: FramedFactoryService,
        public readonly framedLayoutService: FramedLayoutService,
        private readonly renderer: Renderer2
    ) {
        document.addEventListener('mouseup', () => {
            this.dragging = null;
            this.destroy.next();
        });
    }

    onDragStart(config: FramedConfig<any>): void {
        console.log('drag start', config);
        this.dragging = config.name;
        fromEvent(document, 'mousemove')
            .pipe(takeUntil(this.destroy))
            .subscribe(e => {
                this.onMouseMove(config, e as MouseEvent);
            });
    }

    public onMouseMove(config: FramedConfig<any>, event: MouseEvent): void {
        if (!this.dragging) {
            return;
        }

        if (!this.running) {
            this.running = true;
            let remaining = window.innerWidth - event.clientX;

            for (let child of this.container.element.nativeElement.children) {
                child.classList.remove('flex-1');
                child.classList.remove('width');
                // remaining -=
                //     child.getBoundingClientRect().width / Object.keys(this.framedFactoryService.configs).length;
            }

            console.log(event.clientX, remaining);

            console.log(
                `setting to: prev=${this.prev}, current=${
                    this.framedFactoryService.configs[this.dragging].dimensions.current.width
                }, offsetX=${event.offsetX}`
            );
            this.prev = this.dragging;
            this.dragging = null;

            this.framedFactoryService.configs[this.prev].dimensions.current.width = event.offsetX + 1500;
            setTimeout(() => {
                this.running = false;
            }, 100);
        }
    }
}
