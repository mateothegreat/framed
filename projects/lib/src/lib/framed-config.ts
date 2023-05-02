import { Type } from '@angular/core';
import { Subject } from 'rxjs';
import { FramedChange } from './common/change';
import { FramedDimensions } from './framed-dimensions';
import { FramedTheme, FramedThemeDark } from './framed-theme';

export class FramedConfig<T> {
    public name: string;
    public theme?: FramedTheme = new FramedThemeDark();
    public dimensions?: FramedDimensions = new FramedDimensions();
    public componentType?: Type<T>;
    public resizable?: boolean;
    public divider?: boolean;
    public change$?: Subject<FramedChange<any>> = new Subject();

    public constructor(obj?: FramedConfig<T>) {
        Object.assign(this, obj);
    }
}
