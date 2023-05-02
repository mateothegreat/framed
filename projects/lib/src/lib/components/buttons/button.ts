/* Make tailwind compiler see the classes as used
 * to prevent purging them from the final css:
 *
 * bg-default-3 hover:bg-default-4 focus:ring-default-3
 * bg-info-3 hover:bg-info-4 focus:ring-info-3
 * bg-warning-3 hover:bg-warning-4 focus:ring-warning-3
 * bg-error-3 hover:bg-error-4 focus:ring-error-3
 * bg-success-3 hover:bg-success-4 focus:ring-success-3
 */

import { Type } from '@angular/core';
import { FramedLevel } from '../../common/levels';

export interface FramedButtonTheme {
    classes: string;
}

export class FramedButtonDefaultTheme implements FramedButtonTheme {
    public classes = 'bg-red-700 hover:bg-blue-800';
}

export class FramedButton<T> {
    public label?: string | Type<T>;
    public classes?: string;
    public count?: number;
    public disabled?: boolean;
    public busy?: boolean;
    public level?: FramedLevel;
    public theme?: FramedButtonTheme = new FramedButtonDefaultTheme();
    public open?: Type<any>;

    public constructor(obj?: FramedButton<T>) {
        Object.assign(this, obj);
        this.classes = `bg-${this.level}-3 hover:bg-${this.level}-4 focus:ring-${this.level}-3`;
    }
}
