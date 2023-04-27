export class FramedTypeahead<T> {
    public data: T[];
    public selected?: T[];

    public constructor(obj: FramedTypeahead<T>) {
        Object.assign(this, obj);
    }
}
