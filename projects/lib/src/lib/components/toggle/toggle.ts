/*
 *
 * peer-checked:bg-info-3 peer-focus:ring-info-4 not:peer-checked:bg-info-2
 * peer-checked:bg-success-3 peer-focus:ring-success-4 not:peer-checked:bg-success-2
 * peer-checked:bg-error-3 peer-focus:ring-error-4 not:peer-checked:bg-error-2
 * peer-checked:bg-warning-3 peer-focus:ring-warning-4 not:peer-checked:bg-warning-2
 */
import { Type } from '@angular/core';
import { FramedAlignment } from '../../common/alignment';
import { FramedLevel } from '../../common/levels';

export class FramedToggle<T> {
    public label?: string | Type<T>;
    public align?: FramedAlignment = FramedAlignment.RIGHT;
    public level: FramedLevel = FramedLevel.INFO;
    public checked?: boolean;

    public constructor(obj: FramedToggle<T>) {
        Object.assign(this, obj);
    }
}
