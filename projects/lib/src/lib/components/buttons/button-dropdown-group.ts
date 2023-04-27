import { FramedButtonDropdownItem } from './button-dropdown-item';

export interface FramedButtonDropdownGroup<T> {
    label: string;
    items: FramedButtonDropdownItem<T>[];
    extra?: T[];
    disabled?: boolean;
}
