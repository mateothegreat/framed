import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'framed-modal-container',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div
            class="fixed z-50 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
            <div class="rounded-lg bg-dark-4 flex flex-col gap-4 p-5">
                <div class="flex flex-row p-2.5 items-start justify-between">
                    <div class="flex-1 flex flex-col gap-2">
                        <div class="font-medium">header.title</div>
                        <div class="text-xs text-default-2">header.subtitle</div>
                    </div>
                </div>
                <div class="p-2">
                    <!--                  <ng-container *ngComponentOutlet="component" #root></ng-container>-->
                </div>
                <div class="self-stretch flex flex-row items-center justify-end gap-2 text-sm text-default-4">
                    <div
                        class="rounded-md bg-dark-3 flex flex-row py-2 px-5 items-start justify-start opacity-[0.7] border-[1px] border-solid border-dark-4">
                        <div class="relative font-semibold">Cancel</div>
                    </div>
                    <div class="rounded-md bg-success-3 flex flex-row py-2 px-5 text-default-1">
                        <div class="relative font-semibold">Save</div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class ModalContainerComponent {}
