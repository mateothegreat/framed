import { Type } from '@angular/core';

export class FramedFactoryInstance<T> {
    public name?: string | number;
    public componentType: Type<T>;

    public constructor(obj?: FramedFactoryInstance<T>) {
        Object.assign(this, obj);
        if (!this.name) {
            this.name = Math.random().toString(36);
        }
    }
}
