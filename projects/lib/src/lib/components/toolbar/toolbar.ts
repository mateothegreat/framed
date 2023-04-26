import { FramedIcon } from '../icon/icons';

export interface FramedToolbarItem {
    icon: FramedIcon;
    classes?: string;
}
export class FramedToolbar {
    public top: FramedToolbarItem[];
    public bottom?: FramedToolbarItem[];

    public constructor(init?: Partial<FramedToolbar>) {
        Object.assign(this, init);
    }
}
