import { ViewContainerRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { FramedFactoryInstance } from './framed-factory-instance';
import { FramedFactoryOutletPosition } from './framed-factory-outlet-position';

export class FramedFactoryOutlet {
    public viewContainerRef: ViewContainerRef;
    public position?: FramedFactoryOutletPosition;
    public children?: FramedFactoryInstance<any>[] = [];
    public ref$?: ReplaySubject<FramedFactoryOutlet> = new ReplaySubject();

    public constructor(obj?: FramedFactoryOutlet) {
        Object.assign(this, obj);
    }
}
