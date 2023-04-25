export interface FramedTheme {
    toolbar?: string;
}

export class FramedThemeDark implements FramedTheme {
    public toolbar?: string = 'w-[100px] border-r-2 border-dark-4 text-dark-3';

    public constructor(obj?: FramedTheme) {
        Object.assign(this, obj);
    }
}
