import { Type } from '@angular/core';
import { ExpandableDarkTheme, ExpandableTheme } from './expandable-theme';

export class Expandable<H, T> {
    public label: string | Type<H>;
    public component: Type<T>;
    public open?: boolean;
    public theme?: ExpandableTheme = new ExpandableDarkTheme();

    public constructor(obj: Expandable<H, T>) {
        Object.assign(this, obj);
    }
}
