import { ComponentRef } from '@angular/core';
import { FramedModal } from './modal';

export class FramedModalInstance<T> {
    public config: FramedModal<T>;
    public componentRef: ComponentRef<T>;
    public host: HTMLElement;
    public child: HTMLElement;

    public constructor(config: FramedModal<T>) {
        Object.assign(this, config);
    }
}
