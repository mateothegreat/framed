import { FormControl } from '@angular/forms';
import { FramedFormControlType } from './form-control-type';

export class FramedFormControl<T> {
    public title?: string;
    public subtitle?: string;
    public placeholder?: string;
    public type: FramedFormControlType = FramedFormControlType.TEXT;
    public control: FormControl;
    public disabled?: boolean;
    public data?: T;
    public constructor(obj: FramedFormControl<T>) {
        Object.assign(this, obj);
    }
}
