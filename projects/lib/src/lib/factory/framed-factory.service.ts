import { Injectable } from '@angular/core';
import { first, ReplaySubject } from 'rxjs';
import { FramedContainer } from '../framed-container';
import { FramedFactoryInstance } from './framed-factory-instance';
import { FramedFactoryOutlet } from './framed-factory-outlet';
import { FramedFactoryOutletPosition } from './framed-factory-outlet-position';

@Injectable({
    providedIn: 'root'
})
export class FramedFactoryService {
    public outlets = {
        [FramedFactoryOutletPosition.TOP]: new ReplaySubject<FramedFactoryOutlet>(),
        [FramedFactoryOutletPosition.BOTTOM]: new ReplaySubject<FramedFactoryOutlet>(),
        [FramedFactoryOutletPosition.LEFT]: new ReplaySubject<FramedFactoryOutlet>(),
        [FramedFactoryOutletPosition.RIGHT]: new ReplaySubject<FramedFactoryOutlet>()
    };

    public set(outlet: FramedFactoryOutlet): void {
        outlet.ref$.next(outlet);
    }

    public create<T>(outlet: FramedFactoryOutletPosition, container: FramedContainer<T>): ReplaySubject<FramedFactoryOutlet> {
        this.outlets[outlet].pipe(first()).subscribe(o => {
            o.children.push(
                new FramedFactoryInstance<T>({
                    componentType: container.componentType
                })
            );
            this.outlets[outlet].next(o);
        });
        return this.outlets[outlet];
    }
}
