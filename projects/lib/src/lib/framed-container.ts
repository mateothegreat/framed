import { Type } from '@angular/core';

export class FramedContainer<T> {
    public name?: string;
    public classes?: string;
    public componentType: Type<T>;

    public constructor(obj: FramedContainer<T>) {
        Object.assign(this, obj);
        if (!this.name) {
            this.name = Date.now().toString();
        }
    }
}
