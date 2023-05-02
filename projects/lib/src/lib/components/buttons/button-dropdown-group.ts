import { FramedButtonDropdownItem } from './button-dropdown-item';

export interface FramedButtonDropdownGroup<T> {
    label?: string;
    header: FramedButtonDropdownItem<T>;
    items: FramedButtonDropdownItem<T>[];
    footer: FramedButtonDropdownItem<T>;
    extra?: T[];
    disabled?: boolean;
}
