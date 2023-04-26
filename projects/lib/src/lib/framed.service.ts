import { Injectable } from '@angular/core';
import { FramedFactoryService } from './factory/framed-factory.service';

@Injectable({
    providedIn: 'root'
})
export class FramedService {
    public constructor(public readonly framedFactoryService: FramedFactoryService) {}
}
