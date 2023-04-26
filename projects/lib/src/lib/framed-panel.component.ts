import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FramedConfig } from './framed-config';
import { FramedService } from './framed.service';

@Component({
    selector: 'framed-panel',
    template: `
        <div [ngClass]="config.theme.panel" class="overflow-auto w-full h-full">
            <div class="flex flex-1 w-full overflow-auto h-full">
                <div class="flex-1 w-full" *ngComponentOutlet="config.componentType"></div>
                <!--                <div class="p-5">-->
                <!--                    <pre>-->
                <!--        {{ config | json }}-->
                <!--    </pre-->
                <!--                    >-->
                <!--                </div>-->
                <div
                    *ngIf="config.resizable"
                    (mousedown)="dragStart.emit(config)"
                    [ngClass]="config.theme.divider"
                    class="cursor-col-resize h-full right-0 px-2 flex items-center">
                    <svg class="rotate-90 w-5 fill-white/20 -ml-2.5 fixed" viewBox="0 0 972 972">
                        <g>
                            <path
                                d="M90,576h0.5c49.7,0,90-40.3,90-90s-40.3-90-90-90H90c-49.7,0-90,40.3-90,90S40.3,576,90,576z" />
                            <path
                                d="M617.5,576h1.1c49.7,0,90-40.3,90-90s-40.3-90-90-90h-1.1c-49.7,0-90,40.3-90,90S567.8,576,617.5,576z" />
                            <path
                                d="M354.5,576c49.7,0,90-40.3,90-90s-40.3-90-90-90h-1.1c-49.7,0-90,40.3-90,90s40.3,90,90,90H354.5z" />
                            <path
                                d="M881.5,576h0.5c49.7,0,90-40.3,90-90s-40.3-90-90-90h-0.5c-49.7,0-90,40.3-90,90S831.8,576,881.5,576z" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    `
})
export class FramedPanelComponent<T> {
    @Input() config: FramedConfig<T>;
    @Output() dragStart: EventEmitter<FramedConfig<T>> = new EventEmitter();

    public constructor(private readonly framedService: FramedService) {}
}
