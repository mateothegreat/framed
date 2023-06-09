import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FramedIconComponent } from '../icon/icon.component';
import { FramedToolbar } from './toolbar';

@Component({
    selector: 'framed-toolbar',
    standalone: true,
    imports: [CommonModule, FramedIconComponent],
    template: `
        <div class="bg-black mr-0.5 flex flex-col items-center justify-between h-full w-[60px] ">
            <div class="flex flex-col items-center gap-5">
                <div
                    class="mx-3 mt-3 mb-1 rounded-3xl border-2 border-dark-3/50 cursor-pointer hover:border-accent-3 overflow-hidden">
                    <img src="assets/icon.png" />
                </div>
                <div *ngFor="let item of toolbar.top" [ngClass]="item.classes" class="">
                    <framed-icon [name]="item.icon" [size]="24"></framed-icon>
                </div>
            </div>
            <div class="my-5 flex flex-col gap-4">
                <div *ngFor="let item of toolbar.bottom" [ngClass]="item.classes" class="">
                    <framed-icon [name]="item.icon" [size]="24"></framed-icon>
                </div>
                <div class="mt-4 flex items-center fill-dark-3/40 justify-center">
                    <framed-icon name="leftArrow" [size]="10"></framed-icon>
                </div>
            </div>
        </div>
    `
})
export class FramedToolbarComponent {
    @Input() public toolbar: FramedToolbar;
}
