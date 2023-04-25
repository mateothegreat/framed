import { FramedContainer } from './framed-container';
import { FramedPosition } from './framed-position';

export class FramedPanel<T> extends FramedContainer<T> {
    public position: FramedPosition;

    public constructor(obj: FramedPanel<T>) {
        super(obj);
        Object.assign(this, obj);
    }
}
