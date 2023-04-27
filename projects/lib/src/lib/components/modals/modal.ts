import { Type } from '@angular/core';

export class FramedModal<T> {
    public name: string;
    public component: Type<T>;
    public target?: string;
}
