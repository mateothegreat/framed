export interface ExpandableTheme {
    inactive?: string;
    active?: string;
    content?: string;
}

export class ExpandableDarkTheme implements ExpandableTheme {
    public inactive? = 'bg-dark-5 text-gray-500';
    public active? = 'bg-dark-5 text-gray-500';
    public content? = 'bg-black text-gray-500';

    public constructor(obj?: ExpandableDarkTheme) {
        Object.assign(this, obj);
    }
}
