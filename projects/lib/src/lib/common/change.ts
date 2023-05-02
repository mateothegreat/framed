export enum FramedChangeType {
    SCROLL = 'SCROLL'
}

export interface FramedChange<T> {
    type: FramedChangeType;
    data?: T;
}
