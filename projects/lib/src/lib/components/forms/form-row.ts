import { FramedFormControl } from './form-control';

export class FramedFormRow {
    public controls: FramedFormControl<any>[];

    public constructor(obj: FramedFormRow) {
        Object.assign(this, obj);
    }
}
