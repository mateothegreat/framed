import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FramedFactoryOutlet } from './factory/framed-factory-outlet';
import { FramedFactoryOutletPosition } from './factory/framed-factory-outlet-position';
import { FramedFactoryService } from './factory/framed-factory.service';
import { FramedConfig } from './framed-config';
import { FramedService } from './framed.service';

@Component({
    selector: 'framed',
    template: `
        <div class="absolute bottom-0 left-0 right-0 top-0 flex flex-col bg-black">
            <ng-container #top></ng-container>
            <div class="flex flex-1 h-full">
                <!-- left toolbar -->
                <div [ngClass]="framedService.config.theme.toolbar" class="flex">left</div>
                <!-- left panels -->
                <ng-container #left *ngFor="let panel of (framedFactoryService.outlets['left'] | async)?.children">
                    <ng-container *ngComponentOutlet="panel.componentType"></ng-container>
                </ng-container>
                <!-- center -->
                <div class="flex flex-1 flex-col h-full">
                    <ng-content></ng-content>
                </div>
                <!-- right panels -->
                <ng-container #right *ngFor="let panel of (framedFactoryService.outlets['right'] | async)?.children">
                    <ng-container *ngComponentOutlet="panel.componentType"></ng-container>
                </ng-container>
            </div>
            <ng-container #bottom></ng-container>
        </div>
    `
})
export class FramedComponent implements OnInit, AfterViewInit {
    @ViewChild('top', { read: ViewContainerRef }) private top: ViewContainerRef;
    @ViewChild('bottom', { read: ViewContainerRef }) private bottom: ViewContainerRef;
    @ViewChild('left', { read: ViewContainerRef }) private left: ViewContainerRef;
    @ViewChild('right', { read: ViewContainerRef }) private right: ViewContainerRef;

    @Input() public config: FramedConfig;

    public constructor(
        public readonly framedService: FramedService,
        public readonly framedFactoryService: FramedFactoryService,
        private readonly changeDetectorRef: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        if (this.config) {
            this.framedService.apply(this.config);
        }
    }

    public ngAfterViewInit() {
        this.framedFactoryService.outlets[FramedFactoryOutletPosition.TOP].next(
            new FramedFactoryOutlet({
                viewContainerRef: this.top
            })
        );

        this.framedFactoryService.outlets[FramedFactoryOutletPosition.BOTTOM].next(
            new FramedFactoryOutlet({
                viewContainerRef: this.bottom
            })
        );

        this.framedFactoryService.outlets[FramedFactoryOutletPosition.LEFT].next(
            new FramedFactoryOutlet({
                viewContainerRef: this.left
            })
        );

        this.framedFactoryService.outlets[FramedFactoryOutletPosition.RIGHT].next(
            new FramedFactoryOutlet({
                viewContainerRef: this.right
            })
        );

        //
        // Prevent ExpressionChangedAfterItHasBeenCheckedError because we've updated the DOM
        // by generating the outlet children above.
        //
        // (ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'null'. Current value: '[object Object]'. Find more at https://angular.io/errors/NG0100)
        //
        this.changeDetectorRef.detectChanges();
    }
}
