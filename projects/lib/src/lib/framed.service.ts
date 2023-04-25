import { Injectable } from '@angular/core';
import { FramedFactoryService } from './factory/framed-factory.service';
import { FramedConfig } from './framed-config';

@Injectable({
    providedIn: 'root'
})
export class FramedService {
    public config: FramedConfig = new FramedConfig();

    public constructor(public readonly framedFactoryService: FramedFactoryService) {}

    public apply(config: FramedConfig): void {
        this.config = config;
    }
}
