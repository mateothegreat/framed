import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import Icons, { FramedIcon } from './icons';

type IconSize = 6 | 8 | 10 | 12 | 14 | 16 | 20;

@Component({
    selector: 'framed-icon',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div #container class="flex gap-x-2.5 items-center" [class.h-full]="tooltip" [ngClass]="classes">
            <div #wrapper [ngStyle]="{ height: size + 'px', width: size + 'px' }"></div>
            <ng-content></ng-content>
        </div>
    `
})
export class FramedIconComponent implements AfterViewInit {
    @ViewChild('container', { read: ViewContainerRef })
    private container: ViewContainerRef;

    @ViewChild('wrapper', { read: ElementRef }) private svg: ElementRef;

    @Input() name: string;
    @Input() classes: string;
    @Input() tooltip: string;
    @Input() size: IconSize | number | string;

    public constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    public ngAfterViewInit() {
        this.svg.nativeElement.innerHTML = Icons[this.name as FramedIcon];
        this.changeDetectorRef.detectChanges();
    }
}
