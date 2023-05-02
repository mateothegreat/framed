import { Type } from '@angular/core';

export interface FramedButtonDropdownItem<T> {
    label: string;
    click?: Function;
    componentType?: Type<T>;
    extra?: T;
    disabled?: boolean;
}
