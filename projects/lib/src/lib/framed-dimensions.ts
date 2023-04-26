export class FramedDimensions {
    public full?: boolean;
    public x?: number = 0;
    public y?: number = 0;
    public current?: {
        width?: number;
        height?: number;
    } = {
        width: 0,
        height: 0
    };
    public min?: {
        width?: number;
        height?: number;
    };
    public max?: {
        width?: number;
        height?: number;
    };
    public percent?: boolean;

    public constructor(obj?: FramedDimensions) {
        Object.assign(this, obj);
    }
}
