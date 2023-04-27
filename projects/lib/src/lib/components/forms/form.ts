import { FramedFormRow } from './form-row';

export class FramedForm {
    public rows: FramedFormRow[];

    public constructor(obj: FramedForm) {
        Object.assign(this, obj);
    }
}
