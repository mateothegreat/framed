export interface FramedTheme {
    toolbar?: string;
    divider?: string;
    panel?: string;
}

export class FramedThemeDark implements FramedTheme {
    public toolbar?: string = 'border-r-2 border-dark-4 text-dark-3';
    public divider?: string = 'bg-dark-4';
    public panel?: string = 'bg-dark-5';

    public constructor(obj?: FramedTheme) {
        Object.assign(this, obj);
    }
}
