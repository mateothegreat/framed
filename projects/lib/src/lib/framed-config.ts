import { FramedTheme, FramedThemeDark } from './framed-theme';

export class FramedConfig {
    public theme: FramedTheme = new FramedThemeDark();

    public constructor(obj?: FramedConfig) {
        Object.assign(this, obj);
    }
}
